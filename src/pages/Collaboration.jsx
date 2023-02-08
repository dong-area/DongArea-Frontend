import * as S from "../style/CollaborationStyle";
import M from "../asset/Mo.png";
import Cns from "../asset/cns.png";
import Md from "../asset/md.png";
import Unite from "../asset/unite.png";
import B1nd from "../asset/DODAMhome.png";
import Shoulder from "../asset/shoulderhome.png";
import SchoolMeal from "../asset/SchoolMealhome.png";

const Collaboration = () => {
  return (
    <>
      <S.Body />
      <S.WholeTitle>
        <S.Title1 color="#E7AA4A" Number={0}>
          Collaboration
        </S.Title1>
        <S.Title2 color="#FFFFFF" Number={1}>
          with other
        </S.Title2>
        <S.Title3 color="#E7AA4A" Number={2}>
          clubs.
        </S.Title3>
      </S.WholeTitle>
      <S.Monitor src={M}></S.Monitor>
      <S.MonitorInsideNavBar top={7.5}>
        <S.MonitorInsideNav src={Cns}></S.MonitorInsideNav>
        <S.MonitorInsideNav src={Md}></S.MonitorInsideNav>
        <S.MonitorInsideNav src={Unite}></S.MonitorInsideNav>
      </S.MonitorInsideNavBar>
      <S.MonitorInsideNavBar top={70}>
        <S.MonitorInsideNav src={B1nd}></S.MonitorInsideNav>
        <S.MonitorInsideNav src={Shoulder}></S.MonitorInsideNav>
        <S.MonitorInsideNav src={SchoolMeal}></S.MonitorInsideNav>
      </S.MonitorInsideNavBar>
    </>
  );
};

export default Collaboration;
