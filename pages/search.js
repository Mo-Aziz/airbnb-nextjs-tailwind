import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  // parsing the start and end date query
  const formattedStartDate = format(new Date(startDate), "yy MMMM dd");
  const formattedEndDate = format(new Date(endDate), "yy MMMM dd");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>
            {" "}
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold">Stays in {location}</h1>
          <div className="hidden lg:inline-flex  mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button"> Cancellation Flexibility</p>
            <p className="button"> Tyoe of Place</p>
            <p className="button"> Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {/* search results */}
          <div className="flex flex-col">
            {searchResults.map(
              ({img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
