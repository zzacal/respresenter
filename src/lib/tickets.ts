export type TicketResponse = {
  ticketDetails: TicketDetail[];
  statusMessage: string;
};

export type TicketDetail = {
  agent: Agent;
  ticket?: Ticket;
  emd?: Emd;
  transactionInfo: TransactionInfo3;
  message: any;
};

export type Agent = {
  companyName: string;
  crsLocation: any;
  duty: string;
  employeeNumber: string;
  firstName?: string;
  homeBranch: any;
  homeLocation: string;
  iataNumber: any;
  isoCountryCode: string;
  lastName?: string;
  lniata: string;
  name?: string;
  ordinal: any;
  session: Session;
  shiftStartDateTime: string;
  shiftStartDateTimeSpecified: boolean;
  sine: string;
  stateProvince: any;
  stationLocation: string;
  stationNumber: string;
  ticketingProvider: TicketingProvider;
  type: string;
  workLocation: string;
};

export type Session = {
  agentCloseType: string;
  agentOpenType: string;
  stationCloseType: string;
  stationOpenType: string;
};

export type TicketingProvider = {
  checkDigit: string;
  name: string;
  number: string;
  value: string;
};

export type Ticket = {
  isValid: boolean;
  accountingCode: string;
  affiliatedAgent: AffiliatedAgent;
  affinity: any;
  amounts: Amounts;
  checkDigit: string;
  customer: Customer;
  details: Details;
  fareCalculation: FareCalculation;
  flownServiceCoupon: any;
  serviceCoupon: ServiceCoupon[];
  formNumber: string;
  history: History[];
  indicators: Indicators2;
  number: string;
  type: string;
  serialNumber: string;
  service: string;
  payment: Payment[];
  printCoupon: PrintCoupon[];
  relatedDocument: any;
  remark: Remark;
  taxes: Taxes;
};

export type AffiliatedAgent = {
  booking: Booking;
};

export type Booking = {
  duty: string;
  homeLocation: string;
  iataNumber: any;
  ordinal: any;
  pseudoCityCode: any;
  sine: string;
  workLocation: string;
};

export type Amounts = {
  bulkTicket: any;
  inclusiveTour: any;
  amountsNet: any;
  new: New;
  other: any;
};

export type New = {
  base: Base;
  equivalent: any;
  totalTax: TotalTax;
  total: Total;
  net: any;
  taxDetails: TaxDetail[];
};

export type Base = {
  amount: Amount;
  text: string;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type TotalTax = {
  amount: Amount2;
  text: string;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount2 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Total = {
  rateOfExchange: any;
  amount: Amount3;
  text: string;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount3 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type TaxDetail = {
  amount: Amount4;
  applyCreditIndSpecified: boolean;
  text: string;
  sequence: string;
  code: string;
  status: any;
  exempt: boolean;
  exemptSpecified: boolean;
};

export type Amount4 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Customer = {
  purchaser: any;
  traveler: Traveler;
};

export type Traveler = {
  name: string;
  firstName: string;
  lastName: string;
  externalNumber: any;
  passengerType: PassengerType;
  contact: any;
  formOfIdentification: any;
  nameId: string;
  nameNumber: string;
};

export type PassengerType = {};

export type Details = {
  tourNumber: any;
  reservation: Reservation;
  systemCreateDateTime: string;
  localIssueDateTime: LocalIssueDateTime;
  lastUpdate: string;
  expirationDateSpecified: boolean;
  validatingProvider: ValidatingProvider;
  agencyBillingNumber: any;
  invoiceNumber: any;
  waiver: any;
  originCity: string;
  destinationCity: string;
  itineraryType: any;
  settlementAuthorization: any;
  internationalSaleInd: any;
  inclusiveTransaction: any;
  exchTransactionType: any;
  exchTransactionDateSpecified: boolean;
  exchTransactionTimeSpecified: boolean;
  exchCategory: string;
  evenExchWaive: any;
  electronicMiscType: any;
  reasonForIssue: any;
  fareCalculationMode: string;
  ticketingMode: string;
  priceCheckDigit: string;
  couponText: string;
  reasonType: any;
  reasonDescription: any;
  currentStatus: string;
  previousStatus: any;
  exceptionTypeSpecified: boolean;
  currentActivity: any;
  previousActivity: any;
  currencyOverride: any;
  pointOfSaleOverride: any;
  pointOfTicketOverride: any;
  corporateId: any;
  accountCode: any;
  governmentStatus: any;
  residentLargeFamilyDiscount: any;
  baggageDisclosure: any;
};

export type Reservation = {
  sabre: Sabre;
  otherSystem: any;
};

export type Sabre = {
  provider: string;
  isPurged: any;
  purgeDateSpecified: boolean;
  createDate: string;
  createDateSpecified: boolean;
  value: string;
};

export type LocalIssueDateTime = {
  useTimeForPricing: boolean;
  value: string;
};

export type ValidatingProvider = {
  number: string;
  checkDigit: string;
  name: string;
  value: string;
};

export type FareCalculation = {
  bulkTicket: any;
  exchange: any;
  inclusiveTour: any;
  new: New2;
  type: any;
};

export type New2 = {
  value: string;
};

export type ServiceCoupon = {
  marketingProvider: MarketingProvider;
  marketingFlightNumber: string;
  operatingProvider: any;
  operatingFlightNumber: any;
  classOfService: string;
  fareBasis: string;
  startLocation: string;
  startDateTime: string;
  startDateTimeSpecified: boolean;
  endLocation: string;
  item: string;
  endDateTime: string;
  itemElementName: number;
  ticketDesignator: any;
  notValidBeforeDate: string;
  notValidBeforeDateSpecified: boolean;
  notValidAfterDate: string;
  notValidAfterDateSpecified: boolean;
  settlementAuthorization: any;
  bookingStatus: string;
  currentStatus: string;
  previousStatus: any;
  currentControllingProvider: any;
  reservation: any;
  flownCoupon: any;
  affinity: any;
  bagAllowance: string;
  bookingDateSpecified: boolean;
  stopOver?: string;
  couponUse: string;
  indicators: Indicators;
  validatingProvider: any;
  conjunctiveDocNumber: any;
  involuntaryReroute: any;
  startTimeText: string;
  fareBreakAmount?: FareBreakAmount;
  plusUp: any;
  fareBreakDiscount: any;
  associatedDocNumber?: AssociatedDocNumber[];
  bookingClass: any;
  equipment: any;
  pricingRecordFareType: any;
  fareType: any;
  sideTrip: any;
  fareComponent: FareComponent;
  coupon: string;
  entitlement: string;
  type: any;
  segmentId: any;
};

export type MarketingProvider = {
  number: string;
  checkDigit: string;
  name: string;
  value: string;
};

export type Indicators = {
  fareBreak: boolean;
  fareBreakSpecified: boolean;
  turnaroundSpecified: boolean;
  noBreakSpecified: boolean;
  connectionOverrideSpecified: boolean;
  zeroFareAmount: boolean;
  zeroFareAmountSpecified: boolean;
  unchargeableSurface: boolean;
  unchargeableSurfaceSpecified: boolean;
  sideTripStart: boolean;
  sideTripStartSpecified: boolean;
  sideTripEnd: boolean;
  sideTripEndSpecified: boolean;
};

export type FareBreakAmount = {
  amount: Amount5;
  text: string;
  applyCreditIndSpecified: boolean;
};

export type Amount5 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type AssociatedDocNumber = {
  associationType: string;
  couponNumber: string;
  checkDigit: any;
  value: string;
};

export type FareComponent = {
  associatedFareBasis: string;
  associatedTicketDesignator: any;
  fareProvider: any;
  tariff: any;
  fareRule: any;
  pricingVendor: any;
  direction: any;
  mileage: any;
  sequence: string;
  flownIndicator: boolean;
  flownIndicatorSpecified: boolean;
  roundTripIndicator: boolean;
  roundTripIndicatorSpecified: boolean;
  oneWayIndicator: boolean;
  oneWayIndicatorSpecified: boolean;
  oneWayDirectionalIndicator: boolean;
  oneWayDirectionalIndicatorSpecified: boolean;
  inboundIndicator: boolean;
  inboundIndicatorSpecified: boolean;
  iataAuthorisedIndicator: boolean;
  iataAuthorisedIndicatorSpecified: boolean;
  appendNonrefundableIndicator: boolean;
  appendNonrefundableIndicatorSpecified: boolean;
};

export type History = {
  agent: Agent2;
  transactionInfo: TransactionInfo;
  details: Details2;
  serviceCouponHistory?: ServiceCouponHistory[];
  relatedDocumentHistory?: RelatedDocumentHistory;
  affinityHistory: any;
  sequence: string;
  number: string;
  code: string;
};

export type Agent2 = {
  ticketingProvider: TicketingProvider2;
  workLocation: string;
  homeLocation: string;
  lniata: any;
  duty: string;
  sine: string;
};

export type TicketingProvider2 = {
  number: any;
  checkDigit: any;
  name: any;
  value: string;
};

export type TransactionInfo = {
  localDateTimeSpecified: boolean;
  systemDateTime: string;
  systemProvider: string;
  inputMessage: string;
  localDateTime?: string;
};

export type Details2 = {
  supportingDocument: string;
  oldReservation: string;
  newReservation: any;
  couponBitMap: any;
  accountingCode: any;
  oldRemark: any;
  previousDocumentStatus: any;
  documentPurgeTypeCode: any;
  inConnectionDocument: any;
  currentDocumentStatus: any;
  documentEventActivity: any;
  affectedCoupons: string;
};

export type ServiceCouponHistory = {
  marketingProvider: any;
  marketingFlightNumber: any;
  previousControllingProvider: any;
  classOfService: any;
  fareBasis: any;
  departureCIty: any;
  departureDateTimeSpecified: boolean;
  arrivalCity: any;
  arrivalDateTimeSpecified: boolean;
  bookingStatus: any;
  currentStatus: string;
  previousStatus: any;
  currentControllingProvider: any;
  inConnectionDocument: any;
  sequence: string;
  coupon: string;
};

export type RelatedDocumentHistory = {
  miscellaneous: Miscellaneou[];
  supportingDocument: any;
};

export type Miscellaneou = {
  sequence: any;
  number: string;
  affectedCoupons: string;
};

export type Indicators2 = {
  commisionable: any;
  electronic: boolean;
  electronicSpecified: boolean;
  interlineable: any;
  refundable: any;
  retransmit: boolean;
  retransmitSpecified: boolean;
  reservarionPurge: boolean;
  reservarionPurgeSpecified: boolean;
  selfSale: boolean;
  selfSaleSpecified: boolean;
  historical: boolean;
  historicalSpecified: boolean;
  reverseVoid: boolean;
  reverseVoidSpecified: boolean;
  asrSpecified: boolean;
  manualAdd: boolean;
  manualAddSpecified: boolean;
  manualUpdate: boolean;
  manualUpdateSpecified: boolean;
  presentCreditCard: boolean;
  presentCreditCardSpecified: boolean;
  netReporting: boolean;
  netReportingSpecified: boolean;
  endorsable: boolean;
  endorsableSpecified: boolean;
  penaltyRestriction: boolean;
  penaltyRestrictionSpecified: boolean;
  exchangeable: boolean;
  exchangeableSpecified: boolean;
  refundCalculation: boolean;
  refundCalculationSpecified: boolean;
  residentDiscountSpecified: boolean;
};

export type Payment = {
  base: Base2;
  tax: Tax;
  total: Total2;
  remarks: string;
  card: Card;
  cash: any;
  check: any;
  travelDocument: any;
  voucher: any;
  governmentTravel: any;
  invoice: any;
  prepaidTicketAdvice: any;
  certficate: any;
  miscellaneous: any;
  revenueAccounting: any;
  other: any;
  id: any;
  type: string;
  sequence: string;
  code: any;
  missingPayAmtIndSpecified: boolean;
  paymentConfirmation: boolean;
  paymentConfirmationSpecified: boolean;
};

export type Base2 = {
  amount: Amount6;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount6 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Tax = {
  amount: Amount7;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount7 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Total2 = {
  amount: Amount8;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount8 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Card = {
  maskedCardNumber: string;
  expireDate: string;
  approvalCode: ApprovalCode;
  extendedPayment: any;
  details: any;
  approvalSource: any;
  approvalType: any;
  cardBinNumber: string;
  authorized: any;
  addressVerification: any;
  transactionId: string;
  corporateContract: any;
  dynamicCurrencyConversion: any;
  accb: string;
  cardType: string;
};

export type ApprovalCode = {
  type: any;
  source: any;
  value: string;
};

export type PrintCoupon = {
  scn: any;
  lniata: string;
  stockProvider: any;
  scnCheckDigit: any;
  couponType: string;
  printerType: string;
  stockType: string;
  quantity: string;
};

export type Remark = {
  endorsements: Endorsements;
  manual: any;
  payment: Payment2;
  originalIssue: any;
  prepaid: any;
  other: any;
};

export type Endorsements = {
  sequence: string;
  value: string;
};

export type Payment2 = {
  sequence: string;
  value: string;
};

export type Taxes = {
  new: New3;
  other: any;
};

export type New3 = {
  tax: Tax2[];
  airport: Airport[];
  domestic: Domestic[];
};

export type Tax2 = {
  amount: Amount9;
  applyCreditIndSpecified: boolean;
  text: string;
  sequence: string;
  code: string;
  status: any;
  exempt: boolean;
  exemptSpecified: boolean;
};

export type Amount9 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Airport = {
  amount: Amount10;
  airportCode: string;
  text: string;
  sequence: string;
  exempt: boolean;
  exemptSpecified: boolean;
  code: string;
};

export type Amount10 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Domestic = {
  amount: Amount11;
  airportCode: string;
  text: any;
  sequence: string;
  exempt: boolean;
  exemptSpecified: boolean;
  code: string;
};

export type Amount11 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Emd = {
  accountingCode: any;
  affiliatedAgent: any;
  affinity: any;
  amounts: Amounts2;
  checkDigit: any;
  customers: Customer2[];
  details: Details3;
  fareCalculation: any;
  flownServiceCoupon: any;
  coupons: Coupon[];
  formNumber: string;
  history: History2[];
  indicators: Indicators3;
  number: string;
  type: string;
  serialNumber: string;
  service: any;
  payment: Payment[];
  printCoupon: any;
  relatedDocument: RelatedDocument;
  remarks: any;
  taxes: Taxes2;
};

export type Amounts2 = {
  bulkTicket: any;
  inclusiveTour: any;
  amountsNet: any;
  new: New4;
  other: any;
};

export type New4 = {
  base: Base3;
  equivalent: any;
  totalTax: TotalTax2;
  total: Total3;
  net: any;
  taxDetails: TaxDetail2[];
};

export type Base3 = {
  amount: Amount12;
  text: string;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount12 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type TotalTax2 = {
  amount: Amount13;
  text: string;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount13 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Total3 = {
  rateOfExchange: any;
  amount: Amount14;
  text: string;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
  valueCode: any;
};

export type Amount14 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type TaxDetail2 = {
  amount: Amount15;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
  text: string;
  sequence: string;
  code: string;
  status: any;
  exempt: boolean;
  exemptSpecified: boolean;
};

export type Amount15 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Customer2 = {
  purchaser: Purchaser;
  traveler: Traveler2;
};

export type Purchaser = {
  name: string;
  firstName: string;
  lastName: string;
  contact: any;
  companyName: any;
};

export type Traveler2 = {
  name: string;
  firstName: string;
  lastName: string;
  externalNumber: any;
  passengerType: PassengerType2;
  contact: any;
  formOfIdentification: any;
  nameId: any;
  nameNumber: any;
};

export type PassengerType2 = {};

export type Details3 = {
  tourNumber: any;
  reservation: Reservation2;
  systemCreateDateTime: string;
  localIssueDateTime: LocalIssueDateTime2;
  lastUpdate: string;
  expirationDateSpecified: boolean;
  validatingProvider: ValidatingProvider2;
  agencyBillingNumber: any;
  invoiceNumber: any;
  waiver: any;
  originCity: any;
  destinationCity: any;
  itineraryType: any;
  settlementAuthorization: any;
  internationalSaleInd: any;
  inclusiveTransaction: any;
  exchTransactionType: any;
  exchTransactionDateSpecified: boolean;
  exchTransactionTimeSpecified: boolean;
  exchCategory: any;
  evenExchWaive: any;
  electronicMiscType: string;
  reasonForIssue: string;
  fareCalculationMode: string;
  ticketingMode: any;
  priceCheckDigit: any;
  couponText: any;
  reasonType: any;
  reasonDescription: any;
  currentStatus: string;
  previousStatus: any;
  exceptionTypeSpecified: boolean;
  currentActivity: any;
  previousActivity: any;
  currencyOverride: any;
  pointOfSaleOverride: any;
  pointOfTicketOverride: any;
  corporateId: any;
  accountCode: any;
  governmentStatus: any;
  residentLargeFamilyDiscount: any;
  baggageDisclosure: any;
};

export type Reservation2 = {
  sabre: Sabre2;
  otherSystem: any;
};

export type Sabre2 = {
  provider: string;
  isPurged: any;
  purgeDateSpecified: boolean;
  createDate: string;
  createDateSpecified: boolean;
  value: string;
};

export type LocalIssueDateTime2 = {
  useTimeForPricing: boolean;
  value: string;
};

export type ValidatingProvider2 = {
  number: string;
  checkDigit: string;
  name: string;
  value: string;
};

export type Coupon = {
  affinity: any;
  associatedDocNumber: AssociatedDocNumber2;
  serviceCoupon: ServiceCoupon2[];
  fee: Fee;
};

export type AssociatedDocNumber2 = {
  associationType: string;
  couponNumber: string;
  checkDigit: string;
  value: string;
};

export type ServiceCoupon2 = {
  marketingProvider: MarketingProvider2;
  marketingFlightNumber: string;
  operatingProvider: OperatingProvider;
  operatingFlightNumber: any;
  classOfService: string;
  fareBasis: string;
  startLocation: string;
  startDateTime: string;
  startDateTimeSpecified: boolean;
  endLocation: string;
  item: string;
  endDateTime: any;
  itemElementName: number;
  ticketDesignator: any;
  notValidBeforeDateSpecified: boolean;
  notValidAfterDateSpecified: boolean;
  settlementAuthorization: any;
  bookingStatus: any;
  currentStatus: string;
  previousStatus: any;
  currentControllingProvider: any;
  reservation: any;
  flownCoupon: any;
  affinity: any;
  bagAllowance: any;
  bookingDateSpecified: boolean;
  stopOver: any;
  couponUse: any;
  indicators: any;
  validatingProvider: any;
  conjunctiveDocNumber: any;
  involuntaryReroute: any;
  startTimeText: any;
  fareBreakAmount: any;
  plusUp: any;
  fareBreakDiscount: any;
  associatedDocNumber: any;
  bookingClass: any;
  equipment: any;
  pricingRecordFareType: any;
  fareType: any;
  sideTrip: any;
  fareComponent: any;
  coupon: string;
  entitlement: any;
  type: any;
  segmentId: any;
};

export type MarketingProvider2 = {
  number: any;
  checkDigit: any;
  name: any;
  value: string;
};

export type OperatingProvider = {
  number: any;
  checkDigit: any;
  name: any;
  value: string;
};

export type Fee = {
  description: string;
  quanity: number;
  base: Base4;
  taxes: Tax3[];
  totalTax: TotalTax3;
  total: Total4;
};

export type Base4 = {
  amount: Amount16;
  text: string;
  applyCreditIndSpecified: boolean;
};

export type Amount16 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Tax3 = {
  currency: string;
  code: string;
  amount: number;
};

export type TotalTax3 = {
  amount: Amount17;
  text: string;
  applyCreditIndSpecified: boolean;
};

export type Amount17 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Total4 = {
  amount: Amount18;
  text: string;
  applyCreditIndSpecified: boolean;
};

export type Amount18 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type History2 = {
  agent: Agent3;
  transactionInfo: TransactionInfo2;
  details: Details4;
  serviceCouponHistory: ServiceCouponHistory2[];
  relatedDocumentHistory: any;
  affinityHistory: any;
  sequence: string;
  number: string;
  code: string;
};

export type Agent3 = {
  ticketingProvider: TicketingProvider3;
  workLocation: string;
  homeLocation: string;
  lniata: string;
  duty: string;
  sine: string;
};

export type TicketingProvider3 = {
  number: any;
  checkDigit: any;
  name: any;
  value: string;
};

export type TransactionInfo2 = {
  localDateTime: string;
  localDateTimeSpecified: boolean;
  systemDateTime: string;
  systemProvider: string;
  inputMessage: string;
};

export type Details4 = {
  supportingDocument: string;
  oldReservation: string;
  newReservation: any;
  couponBitMap: any;
  accountingCode: any;
  oldRemark: any;
  previousDocumentStatus: any;
  documentPurgeTypeCode: any;
  inConnectionDocument: any;
  currentDocumentStatus: any;
  documentEventActivity: any;
  affectedCoupons: string;
};

export type ServiceCouponHistory2 = {
  marketingProvider: any;
  marketingFlightNumber: any;
  previousControllingProvider: any;
  classOfService: any;
  fareBasis: any;
  departureCIty: any;
  departureDateTimeSpecified: boolean;
  arrivalCity: any;
  arrivalDateTimeSpecified: boolean;
  bookingStatus: any;
  currentStatus: string;
  previousStatus: any;
  currentControllingProvider: any;
  inConnectionDocument: InConnectionDocument;
  sequence: string;
  coupon: string;
};

export type InConnectionDocument = {
  associationType: any;
  couponNumber: string;
  checkDigit: any;
  value: string;
};

export type Indicators3 = {
  commisionable: string;
  electronicSpecified: boolean;
  interlineable: any;
  refundable: string;
  retransmitSpecified: boolean;
  reservarionPurgeSpecified: boolean;
  selfSaleSpecified: boolean;
  historical: boolean;
  historicalSpecified: boolean;
  reverseVoidSpecified: boolean;
  asrSpecified: boolean;
  manualAddSpecified: boolean;
  manualUpdateSpecified: boolean;
  presentCreditCardSpecified: boolean;
  netReportingSpecified: boolean;
  endorsableSpecified: boolean;
  penaltyRestrictionSpecified: boolean;
  exchangeableSpecified: boolean;
  refundCalculationSpecified: boolean;
  residentDiscountSpecified: boolean;
};

// export type Payment3 = {
//   base: Base5
//   tax: Tax4
//   total: Total5
//   remarks: string
//   card: Card2
//   cash: any
//   check: any
//   travelDocument: any
//   voucher: any
//   governmentTravel: any
//   invoice: any
//   prepaidTicketAdvice: any
//   certficate: any
//   miscellaneous: any
//   revenueAccounting: any
//   other: any
//   id: any
//   type: string
//   sequence: string
//   code: any
//   missingPayAmtIndSpecified: boolean
//   paymentConfirmation: boolean
//   paymentConfirmationSpecified: boolean
// }

export type Base5 = {
  amount: Amount19;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount19 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Tax4 = {
  amount: Amount20;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount20 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Total5 = {
  amount: Amount21;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
};

export type Amount21 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type Card2 = {
  maskedCardNumber: string;
  expireDate: string;
  approvalCode: ApprovalCode2;
  extendedPayment: any;
  details: any;
  approvalSource: any;
  approvalType: any;
  cardBinNumber: string;
  authorized: any;
  addressVerification: any;
  transactionId: string;
  corporateContract: any;
  dynamicCurrencyConversion: any;
  accb: string;
  cardType: string;
};

export type ApprovalCode2 = {
  type: any;
  source: any;
  value: string;
};

export type RelatedDocument = {
  conjunctive: any;
  original: any;
  exchange: any;
  refund: any;
};

export type Taxes2 = {
  new: any;
  other: Other[];
};

export type Other = {
  amount: Amount22;
  applyCreditInd: boolean;
  applyCreditIndSpecified: boolean;
  text: string;
  sequence: string;
  code: string;
  status: any;
  exempt: boolean;
  exemptSpecified: boolean;
};

export type Amount22 = {
  currencyCode: string;
  decimalPlace: string;
  value: number;
};

export type TransactionInfo3 = {
  actionType: string;
  category: string;
  code: string;
  inputEntry: string;
  localDateTime: string;
  sequence: string;
  systemDateTime: string;
  systemProvider: SystemProvider;
  tcn: string;
  type: string;
};

export type SystemProvider = {
  number: any;
  checkDigit: any;
  name: any;
  value: string;
};
