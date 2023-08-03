
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
        <div className="mainPage" style={{gap: 30, flexDirection: 'row', width: 'fit-content', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative', padding: '85px 85px 85px 85px', backgroundColor: '#e9ecf1', opacity: 1, display: 'flex'}}>
  <div className="frame1" style={{gap: 23, flexDirection: 'column', alignItems: 'center', flexShrink: 0, overflow: 'hidden', position: 'relative', border: '1px  SOLID #ebebeb', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05000000074505806)', borderRadius: 12, padding: '25px 21px 17px 21px', backgroundColor: '#ffffff', opacity: 1, display: 'flex'}}>
    <div className="frame7" style={{gap: 8, flexDirection: 'column', flexShrink: 0, alignSelf: 'stretch', objectFit: 'cover', position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, display: 'flex'}}><span className="bannerEmojiGenerator" style={{fontFamily: 'Roobert', fontSize: 18, fontWeight: 700, color: '#2f3136', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative'}}>Banner emoji generator</span>
      <span className="theServiceAllowsYouToGenerateAnEmojiBannerImageIdealToPrettifyYourTasksInNotion" style={{fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#40454d', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: 283, flexShrink: 0, position: 'relative'}}>The service allows you to generate an emoji banner image. Ideal to prettify your tasks in Notion.</span>
    </div>
    <div className="frame6" style={{gap: 15, flexDirection: 'column', alignItems: 'stretch', flexShrink: 0, position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, display: 'flex'}}>
      <div className="frame4" style={{height: 132, flexShrink: 0, alignSelf: 'stretch', objectFit: 'cover', overflow: 'hidden', position: 'relative', padding: '0px 0px 0px 0px', backgroundColor: '#e9ecf1', opacity: 1}}><svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={32} cy={32} r={31} fill="#DDE0E6" stroke="#949EAE" strokeWidth={2} strokeDasharray="4 5" />
        </svg><svg className="iconicon" width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.5 31.5C25.232 31.5 31.5 25.232 31.5 17.5C31.5 9.76801 25.232 3.5 17.5 3.5C9.76801 3.5 3.5 9.76801 3.5 17.5C3.5 25.232 9.76801 31.5 17.5 31.5ZM17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill="#949EAE" />
          <path d="M25 20H11C11 22 11 27 18 27C25 27 25 22 25 20Z" fill="#949EAE" />
          <path d="M14 13C14 14.6569 12.8807 16 11.5 16C10.1193 16 9 14.6569 9 13C9 11.3431 10.1193 10 11.5 10C12.8807 10 14 11.3431 14 13Z" fill="#949EAE" />
          <path d="M27 13C27 14.6569 25.6569 16 24 16C22.3431 16 21 14.6569 21 13C21 11.3431 22.3431 10 24 10C25.6569 10 27 11.3431 27 13Z" fill="#949EAE" />
        </svg></div>
      <div className="frame5" style={{gap: 30, flexDirection: 'row', width: 'fit-content', alignItems: 'center', flexShrink: 0, position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, display: 'flex'}}>
        <div className="frame3Select" style={{gap: 5, flexDirection: 'row', width: 'fit-content', alignItems: 'center', flexShrink: 0, position: 'relative', padding: '0px 0px 0px 0px', opacity: 1, display: 'flex'}}><span className="notionCoverFormat" style={{fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: '#40454d', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative'}}>Notion cover format</span>
          <svg width={11} height={7} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.75L5.5 5.25L10 0.75" stroke="#AFAFAD" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="frame2Button" style={{gap: 10, flexDirection: 'row', width: 'fit-content', alignItems: 'flex-start', flexShrink: 0, overflow: 'hidden', position: 'relative', border: '1px  SOLID #3d76c7', borderRadius: 3, padding: '5px 11px 5px 11px', backgroundColor: '#4281db', opacity: 1, display: 'flex'}}><span className="downloadImage" style={{fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#ffffff', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative'}}>Download image</span>
        </div>
      </div>
    </div>
  </div>
  <div className="badgeLiveDesign" style={{gap: 2, flexDirection: 'row', width: 'fit-content', alignItems: 'flex-start', flexShrink: 0, overflow: 'hidden', position: 'absolute', bottom: 20, right: 20, boxShadow: '0px 2px 2px rgba(0.2356770783662796, 0.2644856870174408, 0.3125, 0.10000000149011612)', borderRadius: 6, padding: '9px 14px 7px 14px', backgroundColor: '#ffffff', opacity: 1, display: 'flex'}}><span className="madeOn" style={{fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: '#26292f', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative'}}>Made on</span>
    <svg className="group869" width={19} height={17} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.6" d="M0 17L3.28916 11H15.9398L19 17H0Z" fill="#295CD7" />
      <ellipse cx="9.5" cy={14} rx="4.5" ry={1} fill="white" />
      <circle cx="9.5" cy="6.5" r={6} fill="#295CD7" stroke="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 6.5C16 10.0899 13.0899 13 9.5 13C5.91015 13 3 10.0899 3 6.5C3 2.91015 5.91015 0 9.5 0C13.0899 0 16 2.91015 16 6.5ZM9.5 12C12.5376 12 15 9.53757 15 6.5C15 3.46243 12.5376 1 9.5 1C6.46243 1 4 3.46243 4 6.5C4 9.53757 6.46243 12 9.5 12Z" fill="white" />
    </svg><span className="liveDesign" style={{fontFamily: 'Inter', fontSize: 12, fontWeight: 500, color: '#26292f', textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexShrink: 0, position: 'relative'}}>LiveDesign</span>
  </div>
</div>
    );
}