using ReactRealtyCourse.Business.Models;
using ReactRealtyCourse.DAL.Contexts;
using ReactRealtyCourse.DAL.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace ReactRealtyCourse.DAL
{
    public class ApartmentHelper
    {
        private readonly EFGenericRepo<Apartment, ReactRealtyContext> _apartmentRepo;
        private readonly EFGenericRepo<House, ReactRealtyContext> _houseRepo;

        public ApartmentHelper(EFGenericRepo<Apartment, ReactRealtyContext> apartmentRepo,
            EFGenericRepo<House, ReactRealtyContext> houseRepo)
        {
            _apartmentRepo = apartmentRepo;
            _houseRepo = houseRepo;
        }

        /// <summary>
        /// Filters apartments by price and a part of their house address
        /// </summary>
        public IQueryable<Apartment> GetFilteredApartments(IQueryable<Apartment> allEntries,
            double? minPrice, double? maxPrice, string addressPart, string sortField, string sortOrder)
        {
            if (minPrice.HasValue)
                allEntries = allEntries.Where(x => x.Price >= minPrice.Value);
            if (maxPrice.HasValue)
                allEntries = allEntries.Where(x => x.Price <= maxPrice.Value);
            if (!string.IsNullOrEmpty(addressPart))
            {
                string lowerAddressPart = addressPart.ToLower();
                List<int> houseIds = _houseRepo.GetAllWithoutTracking()
                    .Where(x => x.Address != null && x.Address.ToLower().Contains(lowerAddressPart))
                    .Select(x => x.Id).ToList();

                allEntries = allEntries.Where(x => houseIds.Contains(x.HouseId));
            }

            if(!string.IsNullOrEmpty(sortField) && !string.IsNullOrEmpty(sortOrder))
            {
                if (sortField == "id" && sortOrder == "descend") allEntries = allEntries.OrderByDescending(x => x.Id);
                else if (sortField == "id") allEntries = allEntries.OrderBy(x => x.Id);

                if (sortField == "price" && sortOrder == "descend") allEntries = allEntries.OrderByDescending(x => x.Price);
                else if (sortField == "price") allEntries = allEntries.OrderBy(x => x.Price);
            }

            return allEntries;
        }

        /// <summary>
        /// Fills NotMapped fields "HouseAddress" and "HouseMaxFloor" for a list of apartments
        /// </summary>
        public void FillApartmentsWithAdditionalInfo(List<Apartment> apartments)
        {
            if (apartments == null || apartments.Count == 0)
                return;

            foreach (Apartment apartment in apartments)
            {
                House foundHouse = _houseRepo.GetAllWithoutTracking()
                    .FirstOrDefault(x => x.Id == apartment.HouseId);

                if (foundHouse == null)
                    continue;

                apartment.HouseAddress = foundHouse.Address;
                apartment.HouseMaxFloor = foundHouse.MaxFloor;
            }
        }
    }
}
