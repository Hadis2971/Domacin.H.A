import {
  PageContentContainer,
  PageTitleDescription,
  Product,
  Article,
} from "../../components";

import "./index.scss";

export default () => {
  return (
    <PageContentContainer>
      <PageTitleDescription
        title="Proizvodi"
        description="U našoj ponudi možete pronaći samo 387 handmade proizvode. Podržimo male biznise kupovinom domaćeg. Kupujmo 387"
        bgColor=""
        titleColor="#3c4858"
        descriptionColor="#999999"
      />

      <div id="products-list">
        <Product
          title="Bombice mix – Unikatni poklon"
          description="Čarobno srce – Unikatni pokloni – handmade je divan trik koji mami osmijeh i budi najljepše osjećaje. Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Čarobno srce – Unikatni pokloni – handmade je divan trik koji mami osmijeh i budi najljepše osjećaje. Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />

        <Product
          title="Bombice mix – Unikatni poklon"
          description="Čarobno srce – Unikatni pokloni – handmade je divan trik koji mami osmijeh i budi najljepše osjećaje. Posebno dizajniran za sve one koji vole ili su voljeni, a sa ciljem da zaustavi govor i izazove lavinu poljubaca i zagrljaja. Miris čokolade povećava theta moždane valove koji izazivaju opuštanje. Zato opustite se i naručite slatki grijeh!"
          price={50}
        />
      </div>

      <div id="home-page-articles-list">
        <PageTitleDescription
          title="Savjeti o zdravlju, domaćinstvu i recepti"
          description="Domaćinski savjeti o zdravlju, recepti, uradi sam projekti, poljoprivreda i sve za dom"
          bgColor=""
          titleColor="#3c4858"
          descriptionColor="#999999"
        />

        <div id="home-page-articles-container">
          <Article
            imgSrc="https://t4.ftcdn.net/jpg/03/00/85/23/360_F_300852364_qSrtNxY6pokaVR7er7knpb8AyYJSxtUd.jpg"
            title="Najnovije vijseti"
            description="Najbolji izbor nameštaja za Vas!  Pre nego što se odlučite za odgovarajuću vrstu nameštaja, važno je da sagledate prostor koji imate na raspolaganju i šta želite odabirom odgovarajućeg nameštaja da postignete.  Nameštaj je ogledalo doma i bitno je da se"
            column
          />

          <Article
            imgSrc="https://t4.ftcdn.net/jpg/03/00/85/23/360_F_300852364_qSrtNxY6pokaVR7er7knpb8AyYJSxtUd.jpg"
            title="Najnovije vijseti"
            description="Najbolji izbor nameštaja za Vas!  Pre nego što se odlučite za odgovarajuću vrstu nameštaja, važno je da sagledate prostor koji imate na raspolaganju i šta želite odabirom odgovarajućeg nameštaja da postignete.  Nameštaj je ogledalo doma i bitno je da se"
            column
          />

          <Article
            imgSrc="https://t4.ftcdn.net/jpg/03/00/85/23/360_F_300852364_qSrtNxY6pokaVR7er7knpb8AyYJSxtUd.jpg"
            title="Najnovije vijseti"
            description="Najbolji izbor nameštaja za Vas!  Pre nego što se odlučite za odgovarajuću vrstu nameštaja, važno je da sagledate prostor koji imate na raspolaganju i šta želite odabirom odgovarajućeg nameštaja da postignete.  Nameštaj je ogledalo doma i bitno je da se"
            column
          />
        </div>
      </div>
    </PageContentContainer>
  );
};
