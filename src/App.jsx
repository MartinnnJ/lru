import Header from "./components/Header/Header";
import CategoryBannerList from "./components/CategoryBanner/CategoryBannerList";
import CategoryBanner from "./components/CategoryBanner/CategoryBanner";
import EventCardList from "./components/EventCard/EventCardList";
import EventCard from "./components/EventCard/EventCard";
import NewsCardList from "./components/NewsCard/NewsCardList";
import NewsCard from "./components/NewsCard/NewsCard";
import TableContainer from "./components/Table/TableContainer";
import Table from "./components/Table/Table";
import FooterContainer from "./components/Footer/FooterContainer";
import EventBanner from "./components/Footer/EventBanner";
import InfoTab from "./components/Footer/InfoTab";

import {
  CATEGORIES, EVENTS_DATA, EVENTS_FINISHED_DATA, NEWS_PREVIEW, TABLE_DATA_SK, TABLE_DATA_WORLD, EVENT_BANNER_DATA
} from "./store/data";

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryBannerList>
          {CATEGORIES.map(category => {
            return <CategoryBanner key={category.id} {...category} />;
          })}
        </CategoryBannerList>
        <EventCardList
          title="Nadchádzajúce preteky"
        >
          {EVENTS_DATA.map(event => {
            return <EventCard key={event.id} {...event} />;
          })}
        </EventCardList>
        <EventCardList
          title="Ukončené preteky"
          childrenCount={EVENTS_FINISHED_DATA.length}
        >
          {EVENTS_FINISHED_DATA.map(event => {
            return <EventCard key={event.id} {...event} />;
          })}
        </EventCardList>
        <NewsCardList
          title="Najnovšie aktuality"
        >
          {NEWS_PREVIEW.map(article => {
            return (
              <NewsCard
                key={article.id}
                charLimit={article.charPreviewLimit}
                {...article}
              />
            );
          })}
        </NewsCardList>
        <TableContainer
          title="Majtri Slovenska"
        >
          <Table data={TABLE_DATA_SK} />
        </TableContainer>
        <TableContainer
          title="Majtri sveta"
        >
          <Table data={TABLE_DATA_WORLD} />
        </TableContainer>
        <FooterContainer>
          <EventBanner {...EVENT_BANNER_DATA} />
          <InfoTab title="Suťaže a preteky zo všetkých krajin a kategórií" />
        </FooterContainer>
      </main>
    </>
  )
}

export default App;