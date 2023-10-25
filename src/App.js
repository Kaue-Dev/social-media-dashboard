import Header from "./components/Header";
import SquareCard from "./components/SquareCard";

import facebookIcon from "./images/icon-facebook.svg"
import twitterIcon from "./images/icon-twitter.svg"
import instagramIcon from "./images/icon-instagram.svg"
import youtubeIcon from "./images/icon-youtube.svg"
import RetangularCard from "./components/RetangularCard";
import PrimaryText from "./components/PrimaryText";

function App() {
  return (
    <div className="App bg-darkBg text-white flex flex-col gap-3">
      <Header />
      
      <div className="flex justify-center gap-4 flex-wrap">
        <SquareCard 
          iconSrc={facebookIcon}
          socialUsername="@kauesim"
          followersQuantity={1987}
          todayEarnings={12}
          borderColor="border-4 border-x-darkBg border-y-darkBg border-t-facebook"
        />
        <SquareCard 
          iconSrc={twitterIcon}
          socialUsername="@kauesim"
          followersQuantity={1044}
          todayEarnings={99}
          borderColor="border-4 border-x-darkBg border-y-darkBg border-t-twitter"
        />
        <SquareCard 
          iconSrc={instagramIcon}
          socialUsername="@kauesim"
          followersQuantity="11K"
          todayEarnings={1099}
          borderColor="border-4 border-x-darkBg border-y-darkBg border-t-instagram"
        />
        <SquareCard 
          iconSrc={youtubeIcon}
          socialUsername="Simpleey"
          followersQuantity={8239}
          todayEarnings={144}
          borderColor="border-4 border-x-darkBg border-y-darkBg border-t-youtube"
          negative={true}
        />
      </div>
      
      <div className="px-40 py-4">
        <PrimaryText 
          fontSize="text-3xl"
          textContent="Overview - Today"
        />
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <RetangularCard 
          iconSrc={facebookIcon}
          likesNumber={87}
          todayEarnings="3%"
        />
        <RetangularCard 
          iconSrc={twitterIcon}
          likesNumber={87}
          todayEarnings="2%"
          negative={true}
        />
        <RetangularCard 
          iconSrc={instagramIcon}
          likesNumber={87}
          todayEarnings="2257%"
        />
        <RetangularCard 
          iconSrc={youtubeIcon}
          likesNumber={87}
          todayEarnings="19%"
          negative={true}
        />
      </div>
    </div>
  );
}

export default App;