namespace ReactRealtyCourse.Business.Models
{
    public class Apartment : IdInfo
    {
        public int HouseId { get; set; }

        public int? Floor { get; set; }

        public double? Price { get; set; }

        public int? RoomAmount { get; set; }

        public double? LivingSpace { get; set; }
    }
}
