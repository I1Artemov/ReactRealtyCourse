namespace ReactRealtyCourse.Business.Models
{
    public class House : IdInfo
    {
        public string Address { get; set; }

        public int? MaxFloor { get; set; }

        public int? BuildYear { get; set; }

        public string WallMaterial { get; set; }
    }
}
