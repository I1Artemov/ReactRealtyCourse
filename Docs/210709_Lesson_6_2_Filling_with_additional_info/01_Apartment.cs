using System.ComponentModel.DataAnnotations.Schema;

namespace ReactRealtyCourse.Business.Models
{
    public class Apartment : IdInfo
    {
        public int HouseId { get; set; }

        public int? Floor { get; set; }

        public double? Price { get; set; }

        public int? RoomAmount { get; set; }

        public double? LivingSpace { get; set; }

        [NotMapped]
        public string HouseAddress { get; set; }

        [NotMapped]
        public int? HouseMaxFloor { get; set; }
    }
}
