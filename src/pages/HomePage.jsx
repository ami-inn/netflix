import NavBar from "../components/Navbar/NavBar";
import Banner from "../components/Banner/Banner";

import RowPost from "../components/RowPost/RowPost";
import {
  Actions,
  Originals,
  Romantic,
  Comedy,
  Trending,
  Documentary,
  Horror,
} from "../urls"

function HomePage() {
  return (
    <>
    <NavBar />
    <Banner />
    <RowPost title="Netflix Originals" url={Originals} />
    <RowPost title="Trending" isSmall url={Trending} />
    <RowPost title="Action" isSmall url={Actions} />
    <RowPost title="Horror" isSmall url={Horror} />
    <RowPost title="Comedy" isSmall url={Comedy} />
    <RowPost title="Documentaries" isSmall url={Documentary} />
    <RowPost title="Romantic" isSmall url={Romantic} />
  </>
  )
}

export default HomePage
