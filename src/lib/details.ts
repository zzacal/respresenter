export interface ReservationDetail {
  numberInParty: number
  numberOfInfants: number
  isCodeshare: boolean
  groupBooking: GroupBooking
  bookingDetails: BookingDetails
  passengers: Passenger[]
  segments: Segment[]
  ticketingInfo: TicketingInfo
  receivedFrom: ReceivedFrom
  addresses: Address[]
  phoneFields: PhoneField[]
  remarks: Remark[]
  genericServiceRequests: GenericServiceRequest[]
  ancillaryServicesHistory: any[]
  emailAddresses: any[]
}

export interface GroupBooking {
  isGroupBooking: boolean
  numberInGroup: number
  numberOfSeatsRemaining: number
}

export interface BookingDetails {
  recordLocator: string
  creationTimestamp: string
  creationAgentID: string
  updateTimestamp: string
  estimatedPurgeTimestamp: string
}

export interface Passenger {
  id: string
  nameAssociationId: string
  nameRefNumber: string
  lastName: string
  firstName: string
  serviceRequests: ServiceRequest[]
  apisDocuments: ApisDocuments
  loyaltyInfo: any[]
  bagTags: any[]
  ancillaryServices: any[]
  totalAmount: number
  reissueDifferenceAmount: number
}

export interface ServiceRequest {
  id: string
  type: string
  serviceCode: string
  freeText: string
  fullText: string
  actionCode: string
  vendorCode: string
  desiredCabinUpgrade: number
  ssrType: string
}

export interface ApisDocuments {
  travelDocuments: TravelDocument[]
}

export interface TravelDocument {
  id: string
  firstName: string
  middleName: string
  lastName: string
  dateOfBirth: string
  gender: string
  isPrimaryHolder: boolean
  isLapInfant: boolean
  entryType: string
}

export interface Segment {
  id: string
  sequence: number
  departureAirport: string
  departureAirportCodeContext: string
  arrivalAirport: string
  arrivalAirportCodeContext: string
  operatingAirlineCode: string
  operatingAirlineShortName: string
  operatingFlightNumber: string
  checkInCarrierCode: string
  checkinAirlineShortname: string
  disclosureCarrierText: string
  checkinCarrierText: string
  equipmentType: string
  marketingAirlineCode: string
  marketingFlightNumber: string
  operatingClassOfService: string
  marketingClassOfService: string
  seats: any[]
  isETicket: boolean
  departureDateTime: string
  arrivalDateTime: string
  flightNumber: string
  classOfService: string
  serviceRequests: any[]
  isInboundConnection: boolean
  isOutboundConnection: boolean
  hasScheduleChanged: boolean
  segmentBookedDate: string
  actionCode: string
  isPast: boolean
  numberInParty: number
  elapsedMinutes: number
  hiddenStops: any[]
}

export interface TicketingInfo {
  alreadyTicketedList: AlreadyTicketedList[]
  ticketDetails: TicketDetail[]
  vcrAssociationDetails: VcrAssociationDetail[]
  ticketingTimeLimit: TicketingTimeLimit
  futureTicketing: any[]
}

export interface AlreadyTicketedList {
  id: string
  index: string
  code: string
}

export interface TicketDetail {
  id: string
  index: string
  elementId: string
  originalTicketDetails: string
  transactionIndicator: string
  ticketNumber: string
  passengerName: string
  agencyLocation: string
  dutyCode: string
  agentSine: string
  timestamp: string
  isPaperTicket: boolean
  isEMD: boolean
}

export interface VcrAssociationDetail {
  nameAssocId: string
  airlineAccountingCode: string
  ticketNumber: string
  segmentAssociationId: string
  couponNumber: string
}

export interface TicketingTimeLimit {
  ticketTimeLimit: string
}

export interface ReceivedFrom {
  name: string
}

export interface Address {
  addressLines: AddressLine[]
}

export interface AddressLine {
  id: string
  type: string
  text: string
}

export interface PhoneField {
  id: string
  sequence: number
  workGroup: string
  fullText: string
  countryCode: string
  extension: string
  parsedValue: string
}

export interface Remark {
  index: string
  id: string
  type: string
  remarkLines: string[]
}

export interface GenericServiceRequest {
  id: string
  type: string
  serviceCode: string
  freeText: string
  fullText: string
  vendorCode: string
  desiredCabinUpgrade: number
  ssrType: string
}
