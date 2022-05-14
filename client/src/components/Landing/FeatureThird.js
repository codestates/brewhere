import React, {  } from 'react';
import cptImg from './img/cpt-img.jpg'
import mem1Img from './img/mem-1.png'
import mem2Img from './img/mem-2.png'
import mem3Img from './img/mem-3.png'
import './FeatureThird.css'

export default function FeatureThird() {

return (
  <>
  <div className="ft-third">
    <div className="team-macduck">
      <div className="ft-title">
        Team Macduck
      </div>
      <div className="team">
        <div className="members">
          <img classsName="team-img" src={cptImg} alt='cpt-img' />
          <div className="ft-name">팀장 정새얀</div>
          <div className="ft-position">Backend</div>
        </div>

        <div className="members">
          <img classsName="team-img sb" src={mem1Img} alt='mem1-img' />
          <div className="ft-name">조진형</div>
          <div className="ft-position">Backend</div>
        </div>

        <div className="members">
          <img classsName="team-img jg" src={mem2Img} alt='mem2-img' />
          <div className="ft-name">박선교</div>
          <div className="ft-position">Frontend</div>
        </div>

        <div className="members">
            <img classsName="team-img" src={mem3Img} alt='mem3-img' />
          <div className="ft-name">정민규</div>
          <div className="ft-position">Frontend</div>
        </div>
      </div>
      </div>
    </div>
  </>
  );
}