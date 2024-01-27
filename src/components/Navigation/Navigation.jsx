import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className=
    {`${styles.navigation} container`}>

      <nav className="logo">
        <img src="/images/images.jpg" alt="do some coding logo"/>
      </nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
      
    </nav>
  )
};

export default Navigation
