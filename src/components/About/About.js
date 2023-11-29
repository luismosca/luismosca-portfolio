import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import foto1 from '../../Images/foto1.jpg'

const About = () => {
  const { name, image, role, description, description2, resume, social } = about

  return (
    <div className='about center'>
      <img
        src={foto1}
        alt='profile_picture'
        style={{ width: 150, borderRadius: 15 }}
      />
      {name && (
        <h1 style={{ marginTop: 15 }}>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <p className='about__desc'>{description2 && description2}</p>
      <div className='about__contact center' style={{ display: 'block' }}>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
