export type ReservationDetail = {
  numberInParty: number;
  numberOfInfants: number;
  isCodeshare: boolean;
  groupBooking: GroupBooking;
  bookingDetails: BookingDetails;
  passengers: Passenger[];
  segments: Segment[];
  ticketingInfo: TicketingInfo;
  receivedFrom: ReceivedFrom;
  addresses: Address[];
  phoneFields: PhoneField[];
  remarks: Remark[];
  genericServiceRequests: GenericServiceRequest[];
  ancillaryServicesHistory: any[];
  emailAddresses: any[];
};

export type GroupBooking = {
  isGroupBooking: boolean;
  numberInGroup: number;
  numberOfSeatsRemaining: number;
};

export type BookingDetails = {
  recordLocator: string;
  creationTimestamp: string;
  creationAgentID: string;
  updateTimestamp: string;
  estimatedPurgeTimestamp: string;
};

export type Passenger = {
  id: string;
  nameAssociationId: string;
  nameRefNumber: string;
  lastName: string;
  firstName: string;
  serviceRequests: ServiceRequest[];
  apisDocuments: ApisDocuments;
  loyaltyInfo: any[];
  bagTags: any[];
  ancillaryServices: { [key: string]: string }[];
  totalAmount: number;
  reissueDifferenceAmount: number;
};

export type ServiceRequest = {
  id: string;
  type: string;
  serviceCode: string;
  freeText: string;
  fullText: string;
  actionCode: string;
  vendorCode: string;
  desiredCabinUpgrade: number;
  ssrType: string;
};

export type ApisDocuments = {
  travelDocuments: TravelDocument[];
};

export type TravelDocument = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  isPrimaryHolder: boolean;
  isLapInfant: boolean;
  entryType: string;
};

export type Segment = {
  id: string;
  sequence: number;
  departureAirport: string;
  departureAirportCodeContext: string;
  arrivalAirport: string;
  arrivalAirportCodeContext: string;
  operatingAirlineCode: string;
  operatingAirlineShortName: string;
  operatingFlightNumber: string;
  checkInCarrierCode: string;
  checkinAirlineShortname: string;
  disclosureCarrierText: string;
  checkinCarrierText: string;
  equipmentType: string;
  marketingAirlineCode: string;
  marketingFlightNumber: string;
  operatingClassOfService: string;
  marketingClassOfService: string;
  seats: Seat[];
  isETicket: boolean;
  departureDateTime: string;
  arrivalDateTime: string;
  flightNumber: string;
  classOfService: string;
  serviceRequests: any[];
  isInboundConnection: boolean;
  isOutboundConnection: boolean;
  hasScheduleChanged: boolean;
  segmentBookedDate: string;
  actionCode: string;
  isPast: boolean;
  numberInParty: number;
  elapsedMinutes: number;
  hiddenStops: any[];
};

export type Seat = {
  nameAssociationId: string;
  boardPoint: string;
  offPoint: string;
  seatNumber: string;
  seatType: string[];
  seatStatusCode: string;
};

export type TicketingInfo = {
  alreadyTicketedList: AlreadyTicketedList[];
  ticketDetails: TicketDetail[];
  vcrAssociationDetails: VcrAssociationDetail[];
  ticketingTimeLimit: TicketingTimeLimit;
  futureTicketing: any[];
};

export type AlreadyTicketedList = {
  id: string;
  index: string;
  code: string;
};

export type TicketDetail = {
  id: string;
  index: string;
  elementId: string;
  originalTicketDetails: string;
  transactionIndicator: string;
  ticketNumber: string;
  passengerName: string;
  agencyLocation: string;
  dutyCode: string;
  agentSine: string;
  timestamp: string;
  isPaperTicket: boolean;
  isEMD: boolean;
};

export type VcrAssociationDetail = {
  nameAssocId: string;
  airlineAccountingCode: string;
  ticketNumber: string;
  segmentAssociationId: string;
  couponNumber: string;
};

export type TicketingTimeLimit = {
  ticketTimeLimit: string;
};

export type ReceivedFrom = {
  name: string;
};

export type Address = {
  addressLines: AddressLine[];
};

export type AddressLine = {
  id: string;
  type: string;
  text: string;
};

export type PhoneField = {
  id: string;
  sequence: number;
  workGroup: string;
  fullText: string;
  countryCode: string;
  extension: string;
  parsedValue: string;
};

export type Remark = {
  index: string;
  id: string;
  type: string;
  remarkLines: string[];
};

export type GenericServiceRequest = {
  id: string;
  type: string;
  serviceCode: string;
  freeText: string;
  fullText: string;
  vendorCode: string;
  desiredCabinUpgrade: number;
  ssrType: string;
};
