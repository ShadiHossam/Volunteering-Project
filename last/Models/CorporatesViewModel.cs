using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace last.Models
{
	public class CorporatesViewModel
	{
		public int Id { get; set; }
		public string CorporateName { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }
		public string Phonenumber { get; set; }
		public string Fax { get; set; }
		public string Address { get; set; }
		public string Logo { get; set; }
		public int CountryId { get; set; }
		public int SegmentId { get; set; }
		public int CityId { get; set; }
		public string CountryName { get; set; }
		public string CityName { get; set; }
		public string SegmentName { get; set; }

	}
}