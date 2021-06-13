export interface Jobs {
  Id?;
  JobTitle?: string;
  CreationDate?: Date;
  CreationDateSTR?: Date;
  JobDescription?: string;
  DisplaySalary?: boolean;
  Salary?: number;
  RequirementId?: string;
  CorporateId?: string;
  AreaOfExpertiseId?: string;
  YearsOfExpertiseId?: string;
  CountryId?: string;
  CityId?: string;
  CityName?: string;
  CountryName?: string;
  AreaOfExpertiseName?: string;
  YearsOfExpertiseName?: string;
  YearsOFExpertiseName?;
  CorporateName?: string;
  RequirementName?: string;
}
