import ListingNavbar from "@/components/ListingNavbar"
import ListingsPage from "@/components/ListingsPage"


const Listings = () => {
  return (
    <div className="bg-[#F6F6EF] dark:bg-neutral-800 min-h-screen w-full overflow-x-hidden">
      <ListingNavbar />
      <ListingsPage />
    </div>
  )
}

export default Listings
