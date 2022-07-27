import css from 'styled-jsx/css'
import Image from 'next/image'
import imageProfile from 'public/perfil.png'

export default function ProfilePicture ({ width = 500, height = 750 }) {
  return (
    <>
      <Image
        src={imageProfile}
        className='profile-picture'
        alt='Julieta Aro'
        width={width}
        height={height}
        loading='eager'
        placeholder='blur'
      />
      <style global jsx>
        {styles}
      </style>
    </>
  )
}

const styles = css.global`
  .profile-picture {
    clip-path: url(#blob);
  }
`
