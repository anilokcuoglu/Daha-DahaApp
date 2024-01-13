export interface ApiResponse {
  Title: string;
  Message?: string;
  Buttons?: string | null;
  ImageUrl?: string | null;
  ResultData?: string | null;
  Key?: string | null;
}

export interface PromotionWithId extends ApiResponse {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  EndDate: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Type: string;
  ScenarioType: string;
  SeoName: string;
  Unavailable: string;
  IsMapAvailable: string;
  Unvisible: string;
  DetailButtonText: string;
  ListButtonText: string;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  LuckyDayBackgroundColor: string;
  PromotionDetailItemAreas: {
    Title: string;
    Description: string;
    OpenedIconUrl: string;
    ClosedIconUrl: string;
    UseMapButton: string;
    PromotionDetailItems: {
      Title: string;
      Description: string;
      ImageUrl: string;
    }[];
  }[];
  Contents: [];
  PromotionTags: [];
  PromotionGalleries: {
    DocumentUrl: string;
    DocumentType: string;
    CoverImageUrl: string;
  }[];
  NextFlowConfigurations: {};
  GameWin: string | null;
}

export interface PromotionList extends ApiResponse {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Id: number;
  ImageUrl: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: string;
  Unvisible: string;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: string;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  LuckyDayBackgroundColor: string | null;
}

export interface TagList extends ApiResponse {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}
