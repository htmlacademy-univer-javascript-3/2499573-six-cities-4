import Main from '../pages/main';
type AppScreenProps = {
    placesFound: number;
  }
  
  export default function App({placesFound}: AppScreenProps) {
  return (
    <Main placesFound={placesFound}/>
  );
}