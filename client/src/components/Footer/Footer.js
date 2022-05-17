import React, {  } from 'react';
import cptImg from '../Landing/img/cpt-img.jpg'
import mem1Img from '../Landing/img/mem-1.png'
import mem2Img from '../Landing/img/mem-2.png'
import mem3Img from '../Landing/img/mem-3.png'
import './Footer.css'

export default function Footer() {

return (
  <>
  <div className="ft-third">
    <div className="team-macduck">
        <div className="ft-title">
        <a href="https://github.com/codestates/brewhere"> Team Macduck </a>
        </div>
      <div className="team">
        <div className="members">
          <a className='gh-link' href="https://github.com/hsly22xk">
          <img classsName="team-img" src={cptImg} alt='cpt-img' />
          <div className="ft-name">팀장 정새얀</div>
          <div className="ft-position">Backend</div>
          </a>
        </div>

        <div className="members">
          <a className='gh-link' href="https://github.com/YeonSeoJo">
          <img classsName="team-img" src={mem1Img} alt='mem1-img' />
          <div className="ft-name">조진형</div>
          <div className="ft-position">Backend</div>
          </a>
        </div>

        <div className="members">
          <a className='gh-link' href="https://github.com/kitch-finn">
          <img classsName="team-img" src={mem2Img} alt='mem2-img' />
          <div className="ft-name">박선교</div>
          <div className="ft-position">Frontend</div>
          </a>
        </div>

        <div className="members">
          <a className='gh-link' href="https://github.com/D-MG-lab">
          <img classsName="team-img" src={mem3Img} alt='mem3-img' />
          <div className="ft-name">정민규</div>
          <div className="ft-position">Frontend</div>
          </a>
        </div>
      </div>
      </div>
    </div>
  </>
  );
}