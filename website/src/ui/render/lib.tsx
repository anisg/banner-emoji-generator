import React from 'react'

type ElementProps<T extends keyof JSX.IntrinsicElements = "div"> = { as?: keyof JSX.IntrinsicElements } & JSX.IntrinsicElements[T];
type DivProps = ElementProps<"div">;
type SpanProps = ElementProps<"span"> & { text?: string };

export function cls(framesTree: Record<string, any>, name: string, className: string): string {
  // later: use tailwind-merge
  if (framesTree[name]?.className) {
    return (
      framesTree[name]?.className
        ?.split(" ")
        ?.map((s: string) => `!${s}`)
        .join(" ") +
      " " +
      className
    );
  }
  return className;
}

function Frame<T extends keyof JSX.IntrinsicElements>(props: { as?: T } & JSX.IntrinsicElements[T]) {
  const { as, ...restProps } = props;
  return React.createElement(as ?? "div", restProps);
}

export function Div(props: DivProps) {
  return <Frame as="div" {...props} />;
}

export function Span(props: SpanProps) {
  return <Frame as="span" {...props} {...(props.text ? { children: props.text } : {})} />;
}

function mergeDeep(target: any, ...sources: any[]) {
  function isObject(item: any) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function isReactObject(source: any): boolean {
    return source.$$typeof != null;
  }

  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source) && !isReactObject(source)) {
    for (const key in source) {
      if (isObject(source[key]) && !isReactObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

export function merge<OverrideType>(...arr: OverrideType[]): OverrideType {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {} as OverrideType);
}
