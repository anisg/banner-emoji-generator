
import React from 'react';
import { cls, ElementProps } from '../lib';

export type RenderMainPageProps = {
    frames?: {
["mainPage"]?: ElementProps<"div">;
["frame1"]?: ElementProps<"div">;
["frame7"]?: ElementProps<"div">;
["bannerEmojiGenerator"]?: ElementProps<"span">;
["theServiceAllowsYouToGenerateAnEmojiBannerImageIdealToPrettifyYourTasksInNotion"]?: ElementProps<"span">;
["frame6"]?: ElementProps<"div">;
["frame4"]?: ElementProps<"div">;
["ellipse1"]?: ElementProps<"svg">;
["iconicon"]?: ElementProps<"svg">;
["frame5"]?: ElementProps<"div">;
["frame3Select"]?: ElementProps<"div">;
["notionCoverFormat"]?: ElementProps<"span">;
["vector1"]?: ElementProps<"svg">;
["frame2Button"]?: ElementProps<"div">;
["downloadImage"]?: ElementProps<"span">;
["badgeLiveDesign"]?: ElementProps<"div">;
["madeOn"]?: ElementProps<"span">;
["group869"]?: ElementProps<"svg">;
["liveDesign"]?: ElementProps<"span">}
;
}

export const RenderMainPage = function (props: RenderMainPageProps) {
    const { frames, ...restProps } = props;
    return (
        <div className={cls(frames,"mainPage", `gap-[30px] flex-row w-fit justify-center items-center overflow-hidden relative bg-[#e9ecf1] opacity-100 p-[85px] flex`)}>
  <div className={cls(frames,"frame1", `gap-[23px] flex-col items-center shrink-0 overflow-hidden relative border shadow-[0px_4px_4px_rgba(0,0,0,0.05000000074505806)] bg-white opacity-100 pt-[25px] pb-[17px] px-[21px] rounded-xl border-[#ebebeb] flex`)}>
    <div className={cls(frames,"frame7", `gap-2 flex-col shrink-0 self-stretch object-cover relative opacity-100 p-0 flex`)}><span className={cls(frames,"bannerEmojiGenerator", `font-['Roobert'] text-lg font-bold text-[#2f3136] text-left flex flex-row justify-start shrink-0 relative`)}>Banner emoji generator</span>
      <span className={cls(frames,"theServiceAllowsYouToGenerateAnEmojiBannerImageIdealToPrettifyYourTasksInNotion", `font-['Inter'] text-sm font-medium text-[#40454d] text-left flex flex-row justify-start w-[283px] shrink-0 relative`)}>The service allows you to generate an emoji banner image. Ideal to prettify your tasks in Notion.</span>
    </div>
    <div className={cls(frames,"frame6", `gap-[15px] flex-col items-stretch shrink-0 relative opacity-100 p-0 flex`)}>
      <div className={cls(frames,"frame4", `h-[132px] shrink-0 self-stretch object-cover overflow-hidden relative bg-[#e9ecf1] opacity-100 p-0`)}><svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={32} cy={32} r={31} fill="#DDE0E6" stroke="#949EAE" strokeWidth={2} strokeDasharray="4 5" />
        </svg><svg className="iconicon" width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.5 31.5C25.232 31.5 31.5 25.232 31.5 17.5C31.5 9.76801 25.232 3.5 17.5 3.5C9.76801 3.5 3.5 9.76801 3.5 17.5C3.5 25.232 9.76801 31.5 17.5 31.5ZM17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#949EAE" />
          <path d="M25 20H11C11 22 11 27 18 27C25 27 25 22 25 20Z" fill="#949EAE" />
          <path d="M14 13C14 14.6569 12.8807 16 11.5 16C10.1193 16 9 14.6569 9 13C9 11.3431 10.1193 10 11.5 10C12.8807 10 14 11.3431 14 13Z" fill="#949EAE" />
          <path d="M27 13C27 14.6569 25.6569 16 24 16C22.3431 16 21 14.6569 21 13C21 11.3431 22.3431 10 24 10C25.6569 10 27 11.3431 27 13Z" fill="#949EAE" />
        </svg></div>
      <div className={cls(frames,"frame5", `gap-[30px] flex-row w-fit items-center shrink-0 relative opacity-100 p-0 flex`)}>
        <div className={cls(frames,"frame3Select", `gap-[5px] flex-row w-fit items-center shrink-0 relative opacity-100 p-0 flex`)}><span className={cls(frames,"notionCoverFormat", `font-['Inter'] text-[13px] font-medium text-[#40454d] text-left flex flex-row justify-start shrink-0 relative`)}>Notion cover format</span>
          <svg width={11} height={7} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.75L5.5 5.25L10 0.75" stroke="#AFAFAD" strokeWidth="1.5" />
          </svg>
        </div>
        <div className={cls(frames,"frame2Button", `gap-2.5 flex-row w-fit items-start shrink-0 overflow-hidden relative border bg-[#4281db] opacity-100 px-[11px] py-[5px] rounded-[3px] border-[#3d76c7] flex`)}><span className={cls(frames,"downloadImage", `font-['Inter'] text-sm font-semibold text-white text-left flex flex-row justify-start shrink-0 relative`)}>Download image</span>
        </div>
      </div>
    </div>
  </div>
  <div className={cls(frames,"badgeLiveDesign", `gap-0.5 flex-row w-fit items-start shrink-0 overflow-hidden absolute shadow-[0px_2px_2px_rgba(0.2356770783662796,0.2644856870174408,0.3125,0.10000000149011612)] bg-white opacity-100 pt-[9px] pb-[7px] px-3.5 rounded-md right-5 bottom-5 flex`)}><span className={cls(frames,"madeOn", `font-['Inter'] text-xs font-medium text-[#26292f] text-left flex flex-row justify-start shrink-0 relative`)}>Made on</span>
    <svg className="group869" width={19} height={17} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.6" d="M0 17L3.28916 11H15.9398L19 17H0Z" fill="#295CD7" />
      <ellipse cx="9.5" cy={14} rx="4.5" ry={1} fill="white" />
      <circle cx="9.5" cy="6.5" r={6} fill="#295CD7" stroke="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 6.5C16 10.0899 13.0899 13 9.5 13C5.91015 13 3 10.0899 3 6.5C3 2.91015 5.91015 0 9.5 0C13.0899 0 16 2.91015 16 6.5ZM9.5 12C12.5376 12 15 9.53757 15 6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5C4 9.53757 6.46243 12 9.5 12Z" fill="white" />
    </svg><span className={cls(frames,"liveDesign", `font-['Inter'] text-xs font-medium text-[#26292f] text-left flex flex-row justify-start shrink-0 relative`)}>LiveDesign</span>
  </div>
</div>
    );
}