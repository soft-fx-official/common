/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PortalPsAccentpayModelsApiCardWithdrawModel {
  merchantCode?: string

  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFinanceOperationModelBase {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsAccentpayModelsApiAddModel {
  paymentOptionCode?: string

  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Amount in payment currency
   * @format double
   */
  amount?: number

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAccentpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAccentpayModelsApiNoticeModel {
  paymentOptionCode?: string

  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Amount in payment currency
   * @format double
   */
  amount?: number

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAccentpayModelsApiWithdrawModel {
  merchantCode?: string
  paymentOptionCode?: string

  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  accentpayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface OauthCoreModelsUserInfoUserInfoViewModel {
  /** User Identifier */
  id?: string

  /** eWallet number */
  mainAccountNumber?: string

  /** User full name */
  userName?: string

  /** User first name */
  firstName?: string

  /** User last name */
  lastName?: string

  /** Nickname */
  nickname?: string

  /** Login email */
  email?: string

  /** Primary phone number */
  phone?: string

  /** Country */
  country?: string

  /** Primary language */
  language?: string

  /** Domain account */
  domain?: string

  /** Domain account */
  userTypeName?: string

  /** profiles */
  profiles?: OauthCoreModelsUserInfoProfileInfoViewModel[]

  /** List of the user's accounts */
  accounts?: OauthCoreModelsAccountInfoViewModel[]
}

export interface OauthCoreModelsUserInfoProfileInfoViewModel {
  name?: string
  comment?: string
  ssn?: string

  /** @format int32 */
  title?: number

  /** @format int32 */
  amlStatus?: number
  amlInfo?: string
  firstName?: string
  lastName?: string
  nickname?: string
  preferredLanguageCode?: string
  firstNameOriginal?: string
  lastNameOriginal?: string
  translationStatusName?: string

  /** @format date-time */
  dateOfBirth?: string
  nationalityCode?: string
  nameOriginal?: string
  occupation?: string
  position?: string
  isDirector?: boolean
  webSiteUrl?: string
  employmentStatusCode?: string
  employeeName?: string
  passportIdNumber?: string
  referenceType?: string
  profileType?: string
  address?: OauthCoreModelsUserInfoAddressInfoViewModel
  contacts?: OauthCoreModelsUserInfoContactInfoViewModel[]
  country?: string
  documentSetTypeName?: string
}

export interface OauthCoreModelsAccountInfoViewModel {
  /**
   * Account login
   * @format int64
   */
  login?: number

  /** User name */
  name?: string

  /** Account type */
  type?: string

  /** Platform type */
  platformType?: string

  /**
   * Creation date
   * @format date-time
   */
  registrationDate?: string

  /** Server name */
  serverName?: string

  /** Account number */
  accountNumber?: string
}

export interface OauthCoreModelsUserInfoAddressInfoViewModel {
  addressTypeName?: string
  cityName?: string
  cityNameOriginal?: string
  zipCode?: string
  zipCodeSuffix?: string
  addressValueOriginal?: string
  addressValue?: string
}

export interface OauthCoreModelsUserInfoContactInfoViewModel {
  contactMethodName?: string
  value?: string
  isAchieved?: boolean
  isPrimary?: boolean
  isAllowed?: boolean
  isValid?: boolean
  isVerified?: boolean
}

export interface OauthCoreModelsAccountDetailsResponseModel {
  /** Account number */
  accountNumber?: string

  /**
   * The ratio of the trader's funds to the size of the broker's credit
   * @format int32
   */
  leverage?: number

  /**
   * The value of an account if all positions were closed
   * @format double
   */
  equity?: number

  /**
   * The amount of money in a trader's account that is required as a deposit in order to open and maintain a leveraged trading position
   * @format double
   */
  margin?: number
}

export interface PortalModuleAuthApiModelsAccountsResponseModel {
  internalTransferEnabled?: boolean
  types?: PortalModuleAuthApiModelsAccountsResponseElementModel[]
}

export interface PortalModuleAuthApiModelsAccountsResponseElementModel {
  type?: string
  typeLocalized?: string

  /**
   * Type display order
   * @format int32
   */
  order?: number
  groups?: PortalModuleAuthApiModelsAccountGroupModel[]
}

export interface PortalModuleAuthApiModelsAccountGroupModel {
  group?: string
  groupLocalized?: string

  /**
   * Group display order
   * @format int32
   */
  order?: number
  accounts?: PortalModuleAuthApiModelsAccountModel[]
}

export interface PortalModuleAuthApiModelsAccountModel {
  accountNumber?: string
  pockets?: PortalModuleAuthApiModelsPocketModel[]
  operationSummaryUrl?: string
}

export interface PortalModuleAuthApiModelsPocketModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  currency?: string
  amount?: string
  blockedAmount?: string
  operationSummaryUrl?: string
}

export interface PortalModuleAccountrangeModelsApiAccountRangesRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalModuleAccountrangeModelsApiAccountRangeModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  tradingProductName?: string
  domainName?: string
  tradingProductCode?: string

  /** @format int64 */
  accountNumberFrom?: number

  /** @format int64 */
  accountNumberTo?: number

  /** @format int64 */
  lastAccountNumber?: number
  instanceName?: string
}

export interface PortalModuleAccountrangeModelsApiCreateAccountRangeModel {
  domainName?: string
  tradingProductCode?: string

  /** @format int64 */
  accountNumberFrom?: number

  /** @format int64 */
  accountNumberTo?: number

  /** @format int64 */
  lastAccountNumber?: number
  instanceName?: string
}

export interface PortalModuleAccountrangeModelsApiUpdateAccountRangeModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  domainName?: string
  tradingProductCode?: string

  /** @format int64 */
  accountNumberFrom?: number

  /** @format int64 */
  accountNumberTo?: number

  /** @format int64 */
  lastAccountNumber?: number
  instanceName?: string
}

export interface PortalModuleAccountrangeModelsApiDeleteAccountRangeModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationApiModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  additionalInformationId?: string
  additionalInformationName?: string
  domainName?: string
  parameterCode?: string
  countryAbbreviation?: string
  gradeName?: string
  iban?: string
  value?: string

  /** @format date-time */
  created?: string

  /** @format date-time */
  modified?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationCreateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  additionalInformationId?: string
  parameterCode?: string
  countryAbbreviation?: string
  gradeName?: string
  user?: string
  name?: string
  domainName?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  parameterCode?: string
  countryAbbreviation?: string
  gradeName?: string
  user?: string
  name?: string
  domainName?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiRequestFormPathsModel {
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiFormPathModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
}

export interface PortalUserAdditionalModelsApiRequestCollectionModel {
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiAdditionalInformationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  formPathId?: string
  formPathName?: string

  /** @format int32 */
  delay?: number

  /** @format int32 */
  order?: number
}

export interface PortalUserAdditionalModelsApiCreateModel {
  name?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  formPathId?: string

  /** @format int32 */
  delay?: number

  /** @format int32 */
  order?: number
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalUserAdditionalModelsApiUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  formPathId?: string

  /** @format int32 */
  delay?: number

  /** @format int32 */
  order?: number
  instanceName?: string
}

export interface PortalPsAdvcashModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAdvcashModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsAdvcashModelsApiDepositParametersModel
}

export interface PortalPsAdvcashModelsApiDepositParametersModel {
  /** Merchant Id */
  ac_account_email?: string

  /** Sci Name */
  ac_sci_name?: string

  /** Payment Amount */
  ac_amount?: string

  /** Payment Currency */
  ac_currency?: string

  /** Order Id */
  ac_order_id?: string

  /** Signature */
  ac_sign?: string

  /** Payment Description */
  ac_comments?: string
}

export interface PortalPsAdvcashModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  advcashAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsAdvcashModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
  withdrawalType?: 'EmailWalletId' | 'AdvcashCard' | 'BankCard'
  advcashAccount?: string
  emailAddress?: string
  advcashCardType?: 'Virtual' | 'Plastic'
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsAirtmModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAirtmModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAirtmModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  airtmEmail?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsAirtmModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  airtmEmail?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsAlfabankModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAlfabankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAlfabankModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsAlfabankModelsApiAvailableWithdrawBalanceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAlfabankModelsApiAvailableWithdrawBalanceModel {
  balance?: string
  currency?: string
}

export interface PortalPsAllpay88ModelsApiProvincesRequestModel {
  provinceCode?: string
}

export interface PortalPsAllpay88ModelsApiProvinceModel {
  code?: string
  originalName?: string
  cities?: PortalPsAllpay88ModelsApiCityModel[]
}

export interface PortalPsAllpay88ModelsApiCityModel {
  code?: string
  originalName?: string
}

export interface PortalPsAllpay88ModelsApiBankModel {
  code?: string
  originalName?: string
}

export interface PortalPsAllpay88ModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAllpay88ModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAllpay88ModelsApiWithdrawModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cardNumber?: string
  cardholderName?: string
  provinceCode?: string
  cityCode?: string
  bankCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiAmountRangeAmountRangeRequestModel {
  domainName?: string
  paymentTypeCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiAmountRangeAmountRangeModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** @format date-time */
  modified?: string
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  currencyCode?: string

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  instanceName?: string
}

export interface FinanceConfigurationModelsApiAmountRangeAmountRangeCreateModel {
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  currencyCode?: string

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  instanceName?: string
}

export interface FinanceConfigurationModelsApiAmountRangeAmountRangeUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  currencyCode?: string

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  instanceName?: string
}

export interface FinanceConfigurationModelsApiAmountRangeAmountRangeDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalPsAstropayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsAstropayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsAstropayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  oneTouchPhoneNumber?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsAstropayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  oneTouchPhoneNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalModuleAuthExternalModelsTokenIssueRequestModel {
  /** Factor */
  Factor?: string

  /** Value */
  Value?: string

  /** Hash */
  Hash?: string
}

export interface PortalModuleAuthExternalModelsTokenIssueResponseModel {
  /** Factor */
  Factor?: string

  /** Hash */
  Hash?: string
}

export interface PortalModuleAuthExternalModelsRegisteredDeviceModel {
  Token?: OauthCoreModelsTokenModel
  ClientId?: string
  DeviceSecret?: string
}

export interface OauthCoreModelsTokenModel {
  /** Access token */
  access_token?: string

  /** Refresh token */
  refresh_token?: string

  /** Token type */
  token_type?: string

  /**
   * The lifetime in seconds of the access token
   * @format int32
   */
  expires_in?: number

  /** User name */
  userName?: string

  /**
   * Indicates date-time when the token was issued
   * @format date-time
   */
  '.issued'?: string

  /**
   * Indicates date-time when the token will be expired
   * @format date-time
   */
  '.expires'?: string
}

export interface PortalModuleAuthExternalModelsTokenReissueSendCodeModel {
  /** Factor */
  Factor?: string
}

export interface PortalModuleAuthExternalModelsRegistrationModel {
  /** Email, Phone */
  ContactData?: PortalModuleAuthExternalModelsExternalDeviceContactModel[]

  /** Marker Key-Value pairs */
  Markers?: PortalModuleAuthExternalModelsExternalDeviceMarkerModel[]

  /** Device Id */
  DeviceId?: string

  /** Device IMEI */
  DeviceImei?: string

  /** Device Model */
  DeviceModel?: string

  /** Device NMS Token */
  DeviceNmsToken?: string
}

export interface PortalModuleAuthExternalModelsExternalDeviceContactModel {
  /** Possible Types are: Email, Phone */
  Type?: string

  /** Contact value in the appropriate format */
  Value?: string
}

export interface PortalModuleAuthExternalModelsExternalDeviceMarkerModel {
  Key?: string
  Value?: string
}

export interface PortalModuleAuthExternalModelsBindingRequestModel {
  /** Client unique identifier */
  ClientId?: string

  /** Time-Based One-Time Password */
  Code?: string

  /** Request Id */
  RequestId?: string

  /** Client phone number */
  PhoneNumber?: string

  /** Device Id */
  DeviceId?: string

  /** Device IMEI */
  DeviceImei?: string

  /** Device Model */
  DeviceModel?: string

  /** Device NMS Token */
  DeviceNmsToken?: string

  /** Is Public */
  IsPublic?: string

  /** Factor */
  Factor?: string

  /** Value */
  Value?: string

  /** Hash */
  Hash?: string

  /** Binding Value */
  BindingId?: string
}

export interface PortalModuleAuthExternalModelsBindingSendCodeModel {
  /** Client Id */
  ClientId?: string

  /** One Time Password Code */
  Code?: string

  /** Factor */
  Factor?: string

  /** Contact Value */
  ContactValue?: string
}

export interface PortalModuleAuthExternalModelsUpdateDeviceSettingModel {
  /** Device Id */
  DeviceId?: string

  /** Parameter code */
  Code?: string

  /** New parameter value */
  NewValue?: string
}

export interface PortalModuleAuthExternalModelsDeviceSettingRequestModel {
  /** Device identifier */
  DeviceId?: string
}

export interface PortalModuleAuthExternalModelsDeviceSettingModel {
  /** Parameter code */
  Code?: string

  /** Parameter value */
  Value?: string

  /** Is Setting Editable */
  IsEditable?: boolean
}

export interface PortalModuleAuthExternalModelsSignInModel {
  ClientId?: string
  Key?: string
}

export interface PortalPsAwepayModelsApiBanksRequestModel {
  currencyCode?: string
}

export interface PortalPsAwepayModelsApiBankModel {
  code?: string
  name?: string
}

export interface PortalPsAwepayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsAwepayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsAwepayModelsDepositParametersModel
}

export interface PortalPsAwepayModelsDepositParametersModel {
  card_type?: string

  /** @format int32 */
  sid?: number
  tid?: string
  ref1?: string
  firstname?: string
  lastname?: string
  address?: string
  postcode?: string
  suburb_city?: string
  state?: string
  country?: string
  email?: string
  phone?: string
  'item_name[]'?: string
  'item_desc[]'?: string
  'item_no[]'?: string

  /** @format int32 */
  'item_quantity[]'?: number

  /** @format double */
  'item_amount_unit[]'?: number
  successurl?: string
  failureurl?: string
  postback_url?: string
}

export interface PortalPsAwepayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryAccountNumber?: string
  bankCode?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsBankModelsApiBankProductModel {
  /** Product code */
  code?: string

  /** Product name */
  name?: string

  /** Currencies */
  currencies?: AtCoreModelsCurrencyModel[]
}

export interface AtCoreModelsCurrencyModel {
  /** Currency code (ISO 4217) */
  code?: string

  /** Official currency name */
  name?: string

  /**
   * Specifies how many digits to the right of the decimal points should be reported
   * @format int32
   */
  precision?: number

  /** Currency group (Crypto/Fiat/etc.) */
  group?: string
}

export interface AtBankModelsCreateAccountRequestModel {
  /** Bank product code */
  bankProductCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface AtBankModelsAccountResponseModel {
  /** Type of the created account */
  accountType?: string

  /** Account name */
  accountName?: string

  /** Bank product */
  bankProductCode?: string

  /** ISO currency code of the created account */
  currencyCode?: AtCoreModelsCurrencyModel

  /** Account number */
  accountNumber?: string

  /** National account number */
  nationalAccountNumber?: string

  /** National bank code */
  nationalBankCode?: string

  /** Swift code */
  swiftCode?: string
}

export interface PortalPsBepaidModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsBepaidModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  isFrameMode?: boolean
  gatewayScriptUrl?: string
}

export interface PortalPsBepaidModelsApiWithdrawModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiAddModel {
  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Amount in payment currency
   * @format double
   */
  amount?: number

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsBfopayModelsDepositParametersModel
}

export interface PortalPsBfopayModelsDepositParametersModel {
  MemberID?: string
  TerminalID?: string
  InterfaceVersion?: string
  KeyType?: string
  PayID?: string
  TradeDate?: string
  TransID?: string
  OrderMoney?: string
  ProductName?: string
  ReturnUrl?: string
  PageUrl?: string
  NoticeType?: string
  Signature?: string
}

export interface PortalPsBfopayModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsBfopayModelsApiWithdrawModel {
  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  beneficiaryName?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string
  bankAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardIssueLimitRequestModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  cardFormTypeCode?: string
  currencyCode?: string
  countryCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardIssueLimitModel {
  isExceeded?: boolean

  /** @format int32 */
  limit?: number

  /** @format int32 */
  amountIssued?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel {
  countryCode?: string
  paymentTypeCode?: string
  paymentRouteCode?: string
  currencyCode?: string
  cardNumber?: string
  expirationMonth?: string
  expirationYear?: string
  cardholderName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Masked card number */
  cardNumber?: string
  expirationDate?: PortalPsCreditdebitcardsModelsApiCardExpirationModel
  cardholderName?: string

  /** Plastic/Virtual */
  cardFormTypeName?: string

  /** Card currency code (ISO 4217) */
  currencyCode?: string
  cardProductCode?: string
  paymentTypeCode?: string

  /** American Express/Discover/Mastercard/Visa/etc. */
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  cardStatusName?: string

  /** Card account */
  accountNumber?: string

  /** Card country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /**
   * Card creation date
   * @format date-time
   */
  created?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardExpirationModel {
  month?: string
  year?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardTemplateDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardsRequestModel {
  merchantCode?: string
  paymentTypeCode?: string

  /** American Express/Discover/Mastercard/Visa/etc. */
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  cardStatusName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardFullDetailsModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Card account number */
  accountNumber?: string

  /** Card number */
  pan?: string

  /** Card currency */
  currency?: PortalPsCreditdebitcardsModelsApiCardCurrencyModel

  /** Card status */
  status?: PortalPsCreditdebitcardsModelsApiCardStatusModel

  /** Card form type */
  formType?: PortalPsCreditdebitcardsModelsApiCardFormTypeModel

  /** Card payment option (MasterCard/Visa/Visa Electron/etc.) */
  type?: string

  /**
   * Time when card was issued
   * @format date-time
   */
  created?: string

  /** Card balance */
  balance?: PortalPsCreditdebitcardsModelsApiCardBalanceModel

  /** Card expiration date */
  expiration?: PortalPsCreditdebitcardsModelsApiCardExpirationModel

  /** Cardholder name */
  cardholder?: string
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoModel
}

export interface PortalPsCreditdebitcardsModelsApiCardCurrencyModel {
  /** Currency code (ISO 4217) */
  iso_code?: string
  name?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardStatusModel {
  /**
   * 0 - Active/1 - Requested/2 - Pending/3 - Expired/4 - Deactivated/5 - Blocked
   * @format int32
   */
  code?: number

  /** Active/Blocked/Deactivated/Expired/Pending/Requested */
  name?: string
  nameLocalized?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardFormTypeModel {
  /** Plastic/Virtual */
  name?: string
  nameLocalized?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardBalanceModel {
  /** Card currency code (ISO 4217) */
  currency?: string

  /** Account currency available amount */
  availableAmount?: string

  /** Account currency locked amount */
  lockedAmount?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoModel {
  /** Country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /** City name */
  cityName?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string

  /** Delivery type name */
  deliveryTypeName?: string

  /** Local mobile phone number */
  mobilePhoneNumber?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardBalanceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardCurrencyBalanceModel {
  /** @format double */
  availableAmount?: number

  /** @format double */
  lockedAmount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardProductsRequestModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardProductsModel {
  /** Available card form types */
  formTypes?: PortalPsCreditdebitcardsModelsApiFormTypeGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiFormTypeGroupModel {
  /** Card form type (Plastic/Virtual) */
  formType?: string

  /** Currencies available for specified card form type */
  currencies?: PortalPsCreditdebitcardsModelsApiCurrencyGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiCurrencyGroupModel {
  /** Card currency code (ISO 4217) */
  currencyCode?: string

  /** Payment option types available for specified card currency and card form type */
  paymentOptionTypes?: PortalPsCreditdebitcardsModelsApiPaymentOptionTypeGroupModel[]
}

export interface PortalPsCreditdebitcardsModelsApiPaymentOptionTypeGroupModel {
  /** Payment type code */
  paymentType?: string

  /** Payment option code (MasterCard/Visa/Visa Electron/etc.) */
  paymentOption?: string

  /** Payment route code */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** True if all the documents, which are required to issue this type of card, exist and haven't expired yet, false otherwise (client may call GET api/CardApi/ValidateDocuments to get detailed info) */
  hasRequiredDocuments?: boolean

  /** True if user already has too many cards of this type (client may call GET api/CardConfigurationApi/IssueLimit to get detailed info) */
  isLimitExceeded?: boolean

  /** Available card products */
  productTypes?: PortalPsCreditdebitcardsModelsApiCardProductModel[]
}

export interface PortalPsCreditdebitcardsModelsApiCardProductModel {
  /** Card product code */
  code?: string

  /** Card product name */
  name?: string

  /** Issue fee paid to the card-issuing bank for specified card product */
  price?: FinanceEshopModelsApiPriceModel
  isDeliveryRequired?: boolean
}

export interface FinanceEshopModelsApiPriceModel {
  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalPsCreditdebitcardsModelsApiDocumentValidationRequestModel {
  /** Payment type code */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route code */
  paymentRoute?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDocumentValidationResultModel {
  /** True if all the documents, which are required to issue this type of card, exist and haven't expired yet, false otherwise */
  isValid?: boolean

  /** Detailed validation info (check if isValid=false) */
  errors?: PortalModuleValidationModelsErrorModel[]
}

export interface PortalModuleValidationModelsErrorModel {
  code?: string
  message?: string
  target?: string
  innerErrors?: PortalModuleValidationModelsErrorModel[]
  details?: object
}

export interface PortalPsCreditdebitcardsModelsApiIssueCardModel {
  /** Payment type code */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route code */
  paymentRoute?: string

  /** Card product type code */
  productType?: string

  /** Pass phraze */
  passPhraze?: string

  /** User email */
  email?: string

  /** User mobile phone number */
  mobilePhoneNumber?: string

  /** Card delivery info (required for plastic cards) */
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoCreateModel

  /** Account to withdraw card issue fee from */
  account?: string

  /** Account currency code (ISO 3166-1 alpha-2) */
  accountCurrency?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoCreateModel {
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** City name */
  city?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string

  /** Delivery type name */
  deliveryType?: string

  /** Local mobile phone number */
  mobilePhoneNumber?: string
}

export interface PortalPsCreditdebitcardsModelsApiActivateCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Card activation code provided by user */
  activationCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiFreezeCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDefrostCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardDetailsResponseModel {
  /** CVV code */
  cvv?: string

  /** PIN code */
  pin?: string

  /** Masked card number */
  ppan?: string

  /** Is security code retrieved successfully */
  isRetrieveSuccessful?: boolean
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionsRequestModel {
  /** Card account number */
  account?: string

  /**
   * Start date of statement period (account creation date by default)
   * @format date-time
   */
  dateFrom?: string

  /**
   * End date of statement period
   * @format date-time
   */
  dateTo?: string

  /** @format int32 */
  pageNumber?: number

  /** @format int32 */
  pageSize?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionsResponseModel {
  transactions?: PortalPsCreditdebitcardsModelsApiCardTransactionModel[]

  /**
   * Current page number
   * @format int32
   */
  pageNumber?: number

  /** @format int32 */
  pageSize?: number

  /**
   * Total number of records
   * @format int32
   */
  count?: number
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionModel {
  /** @format date-time */
  created?: string

  /** Credit/Debit */
  balanceOperationTypeName?: string
  description?: string

  /** @format double */
  accountAmount?: number
  accountCurrency?: AtCoreModelsCurrencyModel

  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel

  /** @format double */
  exchangeRate?: number
  fees?: PortalPsCreditdebitcardsModelsApiCardTransactionFeeModel[]
  status?: PortalPsCreditdebitcardsModelsApiCardTransactionStatusModel

  /** MCC obsolete */
  merchantCategoryCode?: string
  internalTransactionType?: string

  /** Merchant info */
  merchant?: PortalPsCreditdebitcardsModelsApiMerchantInfoModel
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionFeeModel {
  /** @format double */
  amount?: number
  currency?: AtCoreModelsCurrencyModel
  description?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardTransactionStatusModel {
  name?: string
  description?: string
}

export interface PortalPsCreditdebitcardsModelsApiMerchantInfoModel {
  categoryCode?: string
  name?: string
  country?: string
  city?: string
}

export interface PortalPsCreditdebitcardsModelsApiReplaceCardModel {
  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Update delivery info if needed */
  deliveryInfo?: PortalPsCreditdebitcardsModelsApiDeliveryInfoUpdateModel

  /** Number of the ewallet from which the replace fee should be withdrawn */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCreditdebitcardsModelsApiDeliveryInfoUpdateModel {
  /** City name */
  city?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string
}

export interface PortalPsCreditdebitcardsModelsApiCardNoticeModel {
  /**
   * Deposit finance operation ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string

  /** Email used in the payment system */
  email?: string

  /** First 6 digits of the card number */
  cardNumberFirstSixDigits?: string

  /** Last 4 digits of the card number */
  cardNumberLastFourDigits?: string

  /** Transaction ID in the payment system */
  transactionId?: string
}

export interface PortalPsCashuModelsApiCashExCitiesRequestModel {
  countryCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExCityModel {
  id?: string
  name?: string
}

export interface PortalPsCashuModelsApiCashExServicesRequestModel {
  countryCode?: string
  cityId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExServiceModel {
  description?: string
  deliverySpeed?: string

  /** @format double */
  fee?: number
}

export interface PortalPsCashuModelsApiCashExAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  cityId?: string
  cityName?: string
  serviceDeliverySpeed?: string
  address?: string
  fullName?: string
  email?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashExDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsCashuModelsCashExDepositParametersModel
}

export interface PortalPsCashuModelsCashExDepositParametersModel {
  orderReference?: string
  checkSum?: string
  language?: string
}

export interface PortalPsCashuModelsApiCashExNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  countryCode?: string
  cityName?: string
  address?: string
  fullName?: string
  email?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsCashuModelsCashuDepositParametersModel
}

export interface PortalPsCashuModelsCashuDepositParametersModel {
  Transaction_Code?: string
}

export interface PortalPsCashuModelsApiCashuNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cashuAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuCashuWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  cashuAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDirectCountryModel {
  code?: string
  name?: string
}

export interface PortalPsCashuModelsApiCashuDirectAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  fullName?: string
  email?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCashuModelsApiCashuDirectDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  requestId?: string
  voucherNumber?: string
  voucherUrl?: string
}

export interface PortalPsCashuModelsApiCashuDirectNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  fullName?: string
  email?: string
  phone?: string
  orderId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiCreateDepositAddressModel {
  accountNumber?: string

  /** Currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string
  reuse?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiDepositAddressModel {
  /** Crypto address to deposit the selected coin into your CoinPayments Wallet */
  address?: string

  /** Optional alternative representation of an address such as X-address format for Ripple or legacy V-prefix for Velas EVM */
  alternativeAddress?: string

  /** For coins needing a destination tag, payment ID, etc. (like Ripple or Monero) to set for depositing into your CoinPayments Wallet */
  destinationTag?: string

  /** NXT Only: pubkey to attach the 1st time you send to the address to activate it */
  publicKey?: string
}

export interface PortalPsCoinpaymentsModelsApiSaveTemplateModel {
  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /** Crypto address in currency's network */
  address?: string

  /** The extra tag to use for the withdrawal for coins that need it (Destination Tag for Ripple, Payment ID for Monero, Message for XEM, etc.) */
  destinationTag?: string

  /** $PayByName tag to send the withdrawal to, either this OR address must be specified (this will also override any destination tag specified) */
  pbnTag?: string

  /** Template name */
  name?: string
  isDefault?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiTemplateModel {
  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /** Template name */
  name?: string

  /** Crypto address in currency's network */
  address?: string

  /** The extra tag to use for the withdrawal for coins that need it (Destination Tag for Ripple, Payment ID for Monero, Message for XEM, etc.) */
  destinationTag?: string

  /** $PayByName tag to send the withdrawal to, either this OR address must be specified (this will also override any destination tag specified) */
  pbnTag?: string
  isDefault?: boolean
}

export interface PortalPsCoinpaymentsModelsApiGetTemplatesModel {
  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc. */
  cryptoTokenStandardCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiAddModel {
  accountNumber?: string

  /** Currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** @format double */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  checkoutUrl?: string
}

export interface PortalPsCoinpaymentsModelsApiNoticeModel {
  accountNumber?: string

  /** Currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** @format double */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /** CoinPayments transaction ID (for fixed price payments) */
  txnId?: string

  /** Verification code from checkout page (for fixed price payments) */
  verificationCode?: string

  /** Transaction ID in currency's network (for variable payments) */
  sendTx?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCoinpaymentsModelsApiWithdrawModel {
  merchantCode?: string
  accountNumber?: string

  /** Currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** @format double */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /** Crypto address in currency's network */
  address?: string

  /** The extra tag to use for the withdrawal for coins that need it (Destination Tag for Ripple, Payment ID for Monero, Message for XEM, etc.) */
  destinationTag?: string

  /** $PayByName tag to send the withdrawal to, either this OR address must be specified (this will also override any destination tag specified) */
  pbnTag?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleCommentModelsApiCommentTemplateTypeModel {
  name?: string
}

export interface PortalModuleCommentModelsApiRequestCommentModel {
  commentTemplateTypeName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleCommentModelsApiCommentModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  description?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionsListRequestModel {
  status?: string[]
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition name */
  name?: string

  /** Competition code */
  code?: string

  /** Path to competition logo image */
  logoUrl?: string

  /**
   * Competition start time
   * @format date-time
   */
  from?: string

  /**
   * Competition end time
   * @format date-time
   */
  to?: string

  /**
   * Total prize
   * @format double
   */
  prize?: number

  /** Currency in which prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /** Competition status */
  status?: string

  /** Is it possible to join competition */
  isJoinCompetitionAvailable?: boolean
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionCodeModel {
  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitionScheduleModel {
  /**
   * Registration open time
   * @format date-time
   */
  registrationOpen?: string

  /**
   * Registration close time
   * @format date-time
   */
  registrationClose?: string

  /**
   * Competition start time
   * @format date-time
   */
  competitionStart?: string

  /**
   * Competition end time
   * @format date-time
   */
  competitionEnd?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsTopCompetitionRequestModel {
  /**
   * From Date
   * @format date-time
   */
  fromDate?: string

  /**
   * To Date
   * @format date-time
   */
  toDate?: string

  /**
   * Count
   * @format int32
   */
  count?: number

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonTopCompetitionCollectionModel {
  /**
   * Search date from
   * @format date-time
   */
  from?: string

  /**
   * Search date to
   * @format date-time
   */
  to?: string

  /** Top competitions list */
  competitions?: PortalExtensionsForexcupModelsJsonTopCompetitionModel[]
}

export interface PortalExtensionsForexcupModelsJsonTopCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition Name */
  name?: string

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /**
   * Total prize
   * @format double
   */
  totalPrize?: number

  /**
   * Guaranteed prize
   * @format double
   */
  guaranteedPrize?: number

  /**
   * Bonus for profit
   * @format double
   */
  profitBonus?: number

  /** Currency in which prize and bonus is calculated */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsUserInfoRequestModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonUserInfoModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** User nickname */
  name?: string

  /**
   * Registration date
   * @format date-time
   */
  registrationDate?: string

  /**
   * Number of user victories
   * @format int32
   */
  wins?: number

  /**
   * Number of user defeats
   * @format int32
   */
  losses?: number

  /**
   * User total profit in all competitions
   * @format double
   */
  totalProfit?: number

  /**
   * User total prize in all competitions
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsTopTradesRequestModel {
  /**
   * UserId
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * From Date
   * @format date-time
   */
  fromDate?: string

  /**
   * To Date
   * @format date-time
   */
  toDate?: string

  /**
   * Count
   * @format int32
   */
  count?: number
}

export interface PortalExtensionsForexcupModelsJsonUserCompetitionModel {
  /**
   * Competition Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** Competition info */
  competition?: PortalExtensionsForexcupModelsJsonCompetitionInfoModel

  /** Competition status */
  status?: string

  /**
   * Prize won by user
   * @format double
   */
  prize?: number

  /** Currency in which prize is calculated */
  prizeCurrency?: AtCoreModelsCurrencyModel

  /**
   * Number of users who took part in competition
   * @format int32
   */
  rating?: number

  /**
   * Place taken by user
   * @format int32
   */
  place?: number

  /**
   * Game account
   * @format int64
   */
  account?: number

  /**
   * Game account balance
   * @format double
   */
  balance?: number

  /** Game account currency */
  accountCurrency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsJsonCompetitionInfoModel {
  /** Competition name */
  name?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonTradeModel {
  /** @format int64 */
  account?: number
  symbol?: string

  /** @format double */
  volume?: number
  type?: string

  /** @format double */
  profit?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionMemberRequestModel {
  /**
   * Page Number
   * @format int32
   */
  pageNumber?: number

  /**
   * Page Size
   * @format int32
   */
  pageSize?: number

  /** Search Input */
  searchInput?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonCompetitorModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * Join date
   * @format date-time
   */
  joinDate?: string

  /** User nickname */
  name?: string

  /** User country code */
  country?: string

  /**
   * Game account number
   * @format int64
   */
  account?: number

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number

  /**
   * Profit for today
   * @format double
   */
  todayProfit?: number

  /**
   * Trades count
   * @format int32
   */
  trades?: number

  /**
   * Game account balance
   * @format double
   */
  balance?: number

  /**
   * Bonus
   * @format double
   */
  bonus?: number

  /** Currency in which balance calculated, optional */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsAnnualPrizeRequestModel {
  /**
   * UserId
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /**
   * Year
   * @format int32
   */
  year?: number

  /** Currency Code */
  currencyCode?: string
}

export interface PortalExtensionsForexcupModelsJsonUserMonthlyPrizeModel {
  /** Month */
  month?: string

  /**
   * Total prize won by user in the month
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated */
  totalPrizeCurrency?: AtCoreModelsCurrencyModel

  /** List of won prizes by currency */
  prizesByCurrency?: SystemCollectionsGenericKeyValuePair2SystemDecimalMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull[]

  /** Competition in which prize was won */
  competition?: string
}

export interface PortalExtensionsForexcupModelsApiRequestModelsGameAccountKeyModel {
  /**
   * Account Key
   * @format int64
   */
  accountKey?: number
}

export interface PortalExtensionsForexcupModelsJsonGameAccountModel {
  /**
   * User Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Game account type */
  type?: string

  /**
   * Game account key
   * @format int64
   */
  account?: number

  /** Competition info */
  competition?: PortalExtensionsForexcupModelsJsonCompetitionInfoModel

  /** User nickname */
  name?: string

  /** Leverage */
  leverage?: string

  /**
   * Initial balance
   * @format double
   */
  initialBalance?: number

  /**
   * Active balance
   * @format double
   */
  activeBalance?: number

  /**
   * Equity
   * @format double
   */
  equity?: number

  /**
   * Free margin
   * @format double
   */
  freeMargin?: number

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number

  /**
   * Profit
   * @format double
   */
  profit?: number

  /** Game account currency */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Time when account characteristics were last updated
   * @format date-time
   */
  updated?: string
}

export interface PortalExtensionsForexcupModelsJsonUserTradingDetailsModel {
  /** Symbol */
  symbol?: string

  /**
   * Volume
   * @format double
   */
  volume?: number

  /**
   * Number of profit trades
   * @format int32
   */
  profitTrades?: number

  /**
   * Number of loss trades
   * @format int32
   */
  lossTrades?: number

  /**
   * Total trades number
   * @format int32
   */
  totalTrades?: number

  /**
   * Profit
   * @format double
   */
  profit?: number

  /** Game account currency */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Profit percent
   * @format double
   */
  profitPercent?: number
}

export interface PortalExtensionsForexcupModelsJsonAccountFeaturesModel {
  leverage?: string

  /** @format int32 */
  maxOrders?: number

  /** @format double */
  initialBalance?: number
  currency?: AtCoreModelsCurrencyModel
  securitylLotParameters?: PortalExtensionsForexcupModelsJsonSecuritylLotParametersModel[]
}

export interface PortalExtensionsForexcupModelsJsonSecuritylLotParametersModel {
  /** @format double */
  minLotSize?: number

  /** @format double */
  maxLotSize?: number

  /** @format double */
  lotStep?: number
  symbols?: string[]
}

export interface PortalExtensionsForexcupModelsApiRequestModelsCompetitionPrizeRequestModel {
  /** Currency Code */
  currencyCode?: string

  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonPrizeModel {
  /**
   * Total prize
   * @format double
   */
  totalPrize?: number

  /** Currency in which total prize is calculated, optional */
  currency?: AtCoreModelsCurrencyModel

  /** Places */
  places?: PortalExtensionsForexcupModelsJsonPrizePlaceModel[]
}

export interface PortalExtensionsForexcupModelsJsonPrizePlaceModel {
  /**
   * Place
   * @format int32
   */
  place?: number

  /**
   * Prize
   * @format double
   */
  prize?: number

  /** Prize currency */
  currency?: AtCoreModelsCurrencyModel
}

export interface PortalExtensionsForexcupModelsApiRequestModelsJoinCompetitionModel {
  /** Competition code */
  code?: string
}

export interface PortalExtensionsForexcupModelsJsonJoinModel {
  /** @format int64 */
  account?: number
  competitionName?: string
  traderPassword?: string
  platform?: string

  /** @format int32 */
  leverage?: number
  room?: string

  /** @format date-time */
  startDate?: string

  /** @format date-time */
  endDate?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationParameterRequestModel {
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationParameterModel {
  parameterName?: string
  parameterCode?: string
  isProtected?: boolean
}

export interface PortalModuleConfigurationModelsApiConfigurationConfigurationParameterRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationConfigurationParameterModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  isProtected?: boolean
  domainName?: string
  parameterName?: string
  value?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationConfigurationParameterCreateModel {
  domainName?: string
  parameterName?: string
  value?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationConfigurationParameterUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  isProtected?: boolean
  domainName?: string
  parameterName?: string
  value?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiConfigurationConfigurationParameterDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string

  /** Official country name */
  name?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressCreateModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Number of the ewallet where the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /**
   * True (by default) - allows to reuse the crypto addresses which were previously used for this type of payments;
   * False - enforces the creation of a new crypto address
   */
  reuse?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressModel {
  /** Crypto address value */
  value?: string

  /** Destination tag */
  paymentTag?: string
}

export interface PortalPsCryptoModelsApiCryptoAddressResponseModel {
  /** Generated crypto address */
  address?: string

  /** Extra identifier */
  destinationTag?: string
}

export interface PortalPsCryptoModelsApiCryptoTokenRequestModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  currencyCode?: string
  cryptoTokenStandardCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiCryptoTokenModel {
  currency?: AtCoreModelsCurrencyModel
  cryptoTokenStandardCode?: string
  hash?: string

  /** @format int32 */
  precision?: number
}

export interface PortalPsCryptoModelsApiAddModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Number of the ewallet where the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /** Crypto token standard code, for example, BEP20/ERC20/SPL/TRC20/etc., required for tokens */
  cryptoTokenStandardCode?: string

  /**
   * True (by default) - allows to reuse the crypto addresses which were previously used for this type of payments;
   * False - enforces the creation of a new crypto address
   */
  reuse?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  cryptoAddress?: PortalPsCryptoModelsApiCryptoAddressModel
}

export interface PortalPsCryptoModelsApiNoticeModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  cryptoTokenStandardCode?: string
  transactionId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsCryptoModelsApiWithdrawModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cryptoTokenStandardCode?: string
  cryptoAddress?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiProvincesRequestModel {
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiProvinceModel {
  code?: string
  name?: string
}

export interface PortalPsDcpayModelsApiCitiesRequestModel {
  paymentOptionCode?: string
  bankProvinceCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiCityModel {
  code?: string
  name?: string
}

export interface PortalPsDcpayModelsApiBankModel {
  code?: string
  name?: string
  nameOriginal?: string
}

export interface PortalPsDcpayModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDcpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDcpayModelsDepositParametersModel
}

export interface PortalPsDcpayModelsDepositParametersModel {
  apiversion?: string
  version?: string
  merchant_account?: string
  merchant_order?: string
  merchant_product_desc?: string
  first_name?: string
  last_name?: string
  address1?: string
  city?: string
  zip_code?: string
  country?: string
  phone?: string
  email?: string
  amount?: string
  currency?: string
  ipaddress?: string
  return_url?: string
  server_return_url?: string
  control?: string
}

export interface PortalPsDcpayModelsApiWithdrawModel {
  paymentOptionCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  bankProvinceCode?: string
  bankCityCode?: string
  bankCode?: string
  bankBranchAddress?: string
  bankAccountNumber?: string
  firstName?: string
  lastName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiAddModel {
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  invoiceUrl?: string
}

export interface PortalPsDectaModelsApiCardLoadModel {
  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Identifier of the Decta card which the money will be deposited to
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDectaModelsApiCardUnloadModel {
  /**
   * Identifier of the Decta card which the money will be withdrawn from
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /**
   * Amount in currency
   * @format double
   */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDeltapayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  countryCode?: string
  state?: string
  cityName?: string
  address?: string
  zipCode?: string
  email?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDeltapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDeltapayModelsDepositParametersModel
}

export interface PortalPsDeltapayModelsDepositParametersModel {
  /** Assigned Affiliate ID */
  affiliate?: string

  /** Payment method for this transaction (Credit Card or Check) */
  paymethod?: string

  /** Post method for this transaction (async/sync) */
  post_method?: string

  /** The transaction type for this transaction: authorize or sale */
  processing_mode?: string

  /** The return URL for the Response Message on a successful */
  redirect?: string

  /** The URL for a server-to-server POST response to be sent */
  notification_url?: string

  /** Assigned Identifier for tracking transactions by the order processing system */
  order_id?: string

  /** The Terminal ID assigned to the website */
  terminal_name?: string

  /** Cardholder`s first name */
  first_name?: string

  /** Cardholder`s last name */
  last_name?: string

  /** Cardholder`s billing address for their card */
  country?: string
  state?: string
  city?: string
  address1?: string
  zip?: string
  telephone?: string

  /** Amount to be charged in currency format with dollar sign and commas removed */
  amount?: string
  currency?: string

  /** Cardholder`s email address */
  email?: string
  card_type?: string
  card_number?: string
  expiry_mo?: string
  expiry_yr?: string
  product_description?: string
  customer_ip?: string
}

export interface PortalPsDengionlineModelsApiDengiOnlineAddModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDengionlineModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  parameters?: PortalPsDengionlineModelsApiDepositParametersModel
}

export interface PortalPsDengionlineModelsApiDepositParametersModel {
  /** DengiOnline project id */
  project?: string

  /** DengiOnline source id */
  source?: string

  /** Order id */
  order_id?: string

  /** User or order id */
  nickname?: string

  /** Amount */
  amount?: string

  /** Payment currency code: USD, RUB, BYR, UZS, EUR, UAH */
  paymentCurrency?: string

  /** Action name */
  action?: string
}

export interface PortalPsDengionlineModelsApiDengiOnlineNoticeModel {
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiBankModel {
  code?: string
  name?: string
  originalName?: string
}

export interface PortalPsDinpayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDinpayModelsDepositParametersModel
}

export interface PortalPsDinpayModelsDepositParametersModel {
  merchant_code?: string
  service_type?: string
  notify_url?: string
  interface_version?: string
  input_charset?: string
  sign_type?: string
  order_no?: string
  order_time?: string
  order_amount?: string
  product_name?: string
  sign?: string
}

export interface PortalPsDinpayModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dinpayAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDinpayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  bankCode?: string
  bankAccountNumber?: string
  firstName?: string
  lastName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDixipayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsDixipayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsDixipayModelsDepositParametersModel
}

export interface PortalPsDixipayModelsDepositParametersModel {
  recipient_account?: string
  order?: string
  product?: string
  url_return?: string
  url_cancel?: string
  url_status?: string
  url_logo?: string
  lang?: string
  amount?: string
  currency?: string
  api_key?: string
}

export interface PortalPsDixipayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dixiPayAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsDixipayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  dixiPayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureIbanStructureCountryRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiRegionCountryModel {
  name?: string
  code?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureIbanStructureRequestModel {
  countryCode?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureIbanStructureModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  recordKey?: string
  countryName?: string
  bankInstitutionName?: string
  IsDefault?: boolean
  groupParentKey?: string
  cityName?: string
  branchBic?: string
  countryCode?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureIbanStructureCreateModel {
  bankInstitutionName?: string
  IsDefault?: boolean
  groupParentKey?: string
  cityName?: string
  branchBic?: string
  countryCode?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureIbanStructureUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  bankInstitutionName?: string
  IsDefault?: boolean
  groupParentKey?: string
  cityName?: string
  branchBic?: string
  countryCode?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiThemeThemeRequestModel {
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiThemeThemeModel {
  name?: string
  url?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiThemeThemeCreateModel {
  name?: string
  url?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiThemeThemeUpdateModel {
  newName?: string
  name?: string
  url?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiThemeThemeDeleteModel {
  name?: string
  url?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainsRequestModel {
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainModel {
  domainName?: string
  themeName?: string
  swiftBicPlusIbanLocal?: PortalModuleConfigurationModelsApiIbanStructureSwiftBicPlusIbanLocalModel
  apiUrl?: string
  isBlocked?: boolean
  isPrimary?: boolean
  accountNumber?: string
}

export interface PortalModuleConfigurationModelsApiIbanStructureSwiftBicPlusIbanLocalModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  recordKey?: string
  bankInstitutionName?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainCreateModel {
  /** Name of the new domain */
  domainName?: string
  themeName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  swiftBicPlusIbanLocalId?: string
  apiUrl?: string
  isPrimary?: boolean
  accountNumber?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainUpdateModel {
  /** Name of the domain which is being updated */
  domainName?: string

  /** New name of the domain */
  newDomainName?: string
  themeName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  swiftBicPlusIbanLocalId?: string
  apiUrl?: string
  isBlocked?: boolean
  isPrimary?: boolean
  accountNumber?: string
  instanceName?: string
}

export interface PortalModuleConfigurationModelsApiDomainDomainDeleteModel {
  /** Name of the domain which is being deleted */
  domainName?: string
  instanceName?: string
}

export interface PortalModuleUtilsModelsApiDownloadRequestFileModel {
  name?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiDownloadFileModel {
  name?: string

  /** @format byte */
  binaryData?: string
}

export interface PortalModuleUtilsModelsApiDownloadRequestDownloadsModel {
  instanceName?: string
}

export interface PortalModuleUtilsModelsApiDownloadDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  url?: string

  /** @format date-time */
  modified?: string
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]
  instanceName?: string
}

export interface PortalModuleUtilsModelsApiDownloadRoleModel {
  name?: string
  code?: string
}

export interface PortalModuleUtilsModelsApiDownloadCreateDownloadModel {
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]
  instanceName?: string
}

export interface PortalModuleUtilsModelsApiDownloadUpdateDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
  comment?: string
  roles?: PortalModuleUtilsModelsApiDownloadRoleModel[]
  instanceName?: string
}

export interface PortalModuleUtilsModelsApiDownloadDeleteDownloadModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalPsDukascopyModelsApiLinkModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDukascopyModelsApiRedirectModel {
  redirectUrl?: string
}

export interface PortalPsDukascopyModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDukascopyModelsApiDepositModel {
  redirectUrl?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsDukascopyModelsApiWithdrawModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsDukascopyModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transactionId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEcommpayModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  isCreditDebitCardsPayment?: boolean
}

export interface PortalPsEcommpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsEcommpayModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsEcommpayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  cardNumber?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsEpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
}

export interface PortalPsEpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  paymentUrl?: string
}

export interface PortalPsEpayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  epayAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsEpayModelsApiWithdrawModel {
  state?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  domainName?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
  epayAccount?: string
}

export interface PortalPsEpaymentsModelsApiCardWithdrawModel {
  merchantCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsEpaymentsModelsDepositParametersModel
}

export interface PortalPsEpaymentsModelsDepositParametersModel {
  partnerid?: string
  sign?: string
  orderid?: string
  amount?: string
  currency?: string
  successurl?: string
  declineurl?: string
  details?: string
}

export interface PortalPsEpaymentsModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  ePaymentsAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  ePaymentsAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkUserModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkUserResultModel {
  /**
   * ePayments authorization endpoint url
   * (OAuth 2.0 Authorization Code Grant Type)
   */
  url?: string
}

export interface PortalPsEpaymentsModelsApiLinkCardModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEpaymentsModelsApiLinkCardResultModel {
  url?: string
}

export interface PortalPsEripModelsApiPaymentInfoRequestModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsEripModelsApiPaymentInfoModel {
  paymentInstruction?: string
  accountNumber?: string
}

export interface PortalPsEripModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentId?: string
}

export interface FinanceEshopModelsApiDeliveryConfigurationRequestModel {
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceEshopModelsApiDeliveryConfigurationModel {
  country?: FinanceEshopModelsApiCountryModel

  /** List of delivery types available for country */
  deliveryTypes?: FinanceEshopModelsApiDeliveryTypeModel[]
}

export interface FinanceEshopModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string
  name?: string
}

export interface FinanceEshopModelsApiDeliveryTypeModel {
  deliveryTypeName?: string
  price?: FinanceEshopModelsApiPriceModel

  /** Indicates whether user should provide local phone number to be able to use this delivery type */
  isLocalPhoneRequired?: boolean
}

export interface FinanceConversionModelsApiCurrencyRateRequestModel {
  /** Base currency */
  currencyCodeFrom?: string

  /** Quote currency */
  currencyCodeTo?: string

  /** Is need to forward */
  isForward?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConversionModelsCurrencyRateInfoModel {
  CurrencyCodeFrom?: string
  CurrencyCodeTo?: string
  RateValue?: string
  IsRateMissing?: boolean
}

export interface FinanceConversionModelsCurrencyRateCollectionResponseModel {
  result?: FinanceConversionModelsCurrencyRateElementModel[]
}

export interface FinanceConversionModelsCurrencyRateElementModel {
  /**
   * Currency rate date-time
   * @format date-time
   */
  date?: string

  /** Symbol name */
  symbol?: string

  /** ISO code of base currency */
  currencyFrom?: AtCoreModelsCurrencyModel

  /** ISO code of target currency */
  currencyTo?: AtCoreModelsCurrencyModel

  /**
   * Currency rate value
   * @format double
   */
  value?: number
}

export interface FinanceConversionModelsCurrencyRateRequestModel {
  /**
   * Conversion date
   * @format date-time
   */
  date?: string

  /**
   * Currency rate value
   * @format double
   */
  value?: number

  /** Base currency */
  currencyFrom?: string

  /** Quote currency */
  currencyTo?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleUtilsModelsApiCurrencyRateHistoryResponseModel {
  /** Date */
  date?: string
  result?: PortalModuleUtilsModelsApiCurrencyRateHistoryResponseElementModel[]
}

export interface PortalModuleUtilsModelsApiCurrencyRateHistoryResponseElementModel {
  base?: AtCoreModelsCurrencyModel
  rates?: PortalModuleUtilsModelsApiCurrencyRateResponseModel[]
}

export interface PortalModuleUtilsModelsApiCurrencyRateResponseModel {
  /** ISO currency code */
  code?: string

  /**
   * currency rate value
   * @format double
   */
  value?: number
}

export interface PortalModuleUtilsModelsApiExchangeRequestModel {
  /** ISO code of base currency */
  from?: string

  /** ISO code of target currency */
  to?: string

  /**
   * Amount to convert
   * @format double
   */
  amount?: number

  /** User's PinCode */
  pinCode?: string
}

export interface PortalModuleUtilsModelsApiCurrencyExchangeCreateModel {
  /**
   * Sale amount
   * @format double
   */
  amount?: number

  /** Base currency code (ISO 4217) */
  currencyFrom?: string

  /** Target currency code (ISO 4217) */
  currencyTo?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsFasapayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string
}

export interface PortalPsFasapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsFasapayModelsDepositParametersModel
}

export interface PortalPsFasapayModelsDepositParametersModel {
  /** Merchant Id */
  fp_acc?: string

  /** Payment Description */
  fp_item?: string

  /** Payment Amount */
  fp_amnt?: string

  /** Payment Currency */
  fp_currency?: string

  /** Payment Comments */
  fp_comments?: string

  /**
   * Finance Operation Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  fp_merchant_ref?: string

  /** Fasapay Account from */
  fp_acc_from?: string

  /** Store Name */
  fp_store?: string

  /** Success Url */
  fp_success_url?: string

  /** Success Method */
  fp_succes_method?: string

  /** Fail Url */
  fp_fail_url?: string

  /** Fail Method */
  fp_fail_method?: string

  /** Status Url */
  fp_status_url?: string

  /** Status Method */
  fp_status_method?: string
}

export interface PortalPsFasapayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string

  /** @format date-time */
  transactionDate?: string
  batchCode?: string
}

export interface PortalPsFasapayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  fasaPayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationRequestModel {
  domainName?: string
  paymentTypeCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  accountNumber?: string
  countryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string

  /** @format date-time */
  modified?: string
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  regionName?: string
  baseCurrencyCode?: string
  targetCurrencyCode?: string

  /** @format double */
  constant?: number

  /** @format double */
  percent?: number

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  convert?: boolean
  isEnabled?: boolean
  instanceName?: string
}

export interface FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationCreateModel {
  /** eWallet, trading account, email, crypto address belong to user */
  user?: string
  countryCodes?: string[]
  bankIds?: string[]
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  regionName?: string
  baseCurrencyCode?: string
  targetCurrencyCode?: string

  /** @format double */
  constant?: number

  /** @format double */
  percent?: number

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  convert?: boolean
  isEnabled?: boolean
  instanceName?: string
}

export interface FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** eWallet, trading account, email, crypto address belong to user */
  user?: string
  countryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  domainName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string
  regionName?: string
  baseCurrencyCode?: string
  targetCurrencyCode?: string

  /** @format double */
  constant?: number

  /** @format double */
  percent?: number

  /** @format double */
  minValue?: number

  /** @format double */
  maxValue?: number
  convert?: boolean
  isEnabled?: boolean
  instanceName?: string
}

export interface FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalPsFocalpaymentsModelsApiAddModel {
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsFocalpaymentsModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsFocalpaymentsModelsDepositParametersModel
}

export interface PortalPsFocalpaymentsModelsDepositParametersModel {
  Merchant?: string
  Site?: string
  Amount?: string
  Currency?: string
  TransRef?: string
  Product?: string
  PaymentType?: string
  lang?: string
  TestTrans?: string
  ReturnUrlSuccess?: string
  ReturnUrlFailure?: string
}

export interface PortalPsFocalpaymentsModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  focalPaymentsAccountName?: string
  focalPaymentsAccountNumber?: string
  nationalIdCardNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalGatewayApiModelsPaymentRequestModel {
  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** Type of finance operation (Add/Notify/Withdraw) */
  financeOperationType?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  inPaymentType?: string
  inPaymentOption?: string
  inPaymentRoute?: string
  inCurrency?: string
  outPaymentType?: string
  outPaymentOption?: string
  outPaymentRoute?: string
  outCurrency?: string
  paymentTypeAccount?: string

  /** @format double */
  amount?: number
}

export interface PortalGatewayApiModelsAddTradingAccountRequestModel {
  /** Trading product code */
  tradingProduct?: string

  /** Account currency code (ISO 4217) */
  currencyCode?: string

  /** @format int32 */
  leverage?: number

  /** @format double */
  amount?: number
  agent?: string
  promotion?: string
  competitionCode?: string
}

export interface PortalGatewayApiModelsStatementRequestModel {
  /** Account for which statement is generated (current user's main account by default) */
  accountNumber?: string

  /**
   * Start date of statement period
   * @format date-time
   */
  dateFrom?: string

  /**
   * End date of statement period (current date by default)
   * @format date-time
   */
  dateTo?: string

  /** Currency for which statement is generated (all currencies are included by default) */
  currencyCode?: string
}

export interface PortalUserIdentityGaModelsSettingsModel {
  /** Uri to generate QR code from */
  uri?: string

  /** Time based key (can be used for manual entry) */
  key?: string
}

export interface PortalUserIdentityModelsApiActivateIdentityModel {
  identityTypeName?: string

  /** Email, phone, time based key, etc. */
  value?: string

  /** Activation code */
  code?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiUpdateIdentityModel {
  identityTypeName?: string

  /** New password/PIN code/etc. value */
  password?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiDeactivateIdentityModel {
  identityTypeName?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiSendCodeModel {
  /** MFA state (required for login operation) */
  state?: string

  /** Identity type that user wants to authenticate with */
  identityTypeName?: string

  /** Email or phone (required for identity activation) */
  contactValue?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiCodeInfoModel {
  /**
   * OTP code length
   * @format int32
   */
  length?: number

  /**
   * The remaining lifetime (in milliseconds) of the current OTP code
   * @format int32
   */
  expiresIn?: number

  /**
   * The remaining time (in milliseconds) until method will generate and send a new OTP code
   * @format int32
   */
  resendIn?: number
}

export interface PortalUserIdentityModelsApiTurnOnClientFactorModel {
  identityTypeName?: string

  /** ['LOGIN', 'WITHDRAW'] */
  operationCode?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiTurnOffClientFactorModel {
  identityTypeName?: string

  /** ['LOGIN', 'WITHDRAW'] */
  operationCode?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentitySmsModelsApiOperatorCallModel {
  grade?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentitySmsModelsApiVerifyModel {
  grade?: string
  phone?: string
  otp?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiGetBackupCodesModel {
  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiBackupCodesModel {
  codes?: string[]
}

export interface PortalUserIdentityModelsApiRegenerateBackupCodesModel {
  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityEmailModelsApiEmailVerificationModel {
  gradeName?: string
  email?: string
  emailCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalCoreModelsBaseApiModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityConfigurationModelsApiIdentityTypeConfigurationModel {
  identityTypeName?: string
  isExternal?: boolean
  isEnabled?: boolean
  clientFactors?: PortalUserIdentityConfigurationModelsApiClientFactorConfigurationModel[]
  identityKeys?: PortalUserIdentityConfigurationModelsApiIdentityKeyConfigurationModel[]
}

export interface PortalUserIdentityConfigurationModelsApiClientFactorConfigurationModel {
  operationCode?: string
  isEnabled?: boolean
}

export interface PortalUserIdentityConfigurationModelsApiIdentityKeyConfigurationModel {
  identityKeyName?: string
  isEnabled?: boolean
}

export interface PortalUserIdentityModelsApiCreateGenericIdentityModel {
  /** Identity key that user wants to authenticate with */
  identityKeyName?: 'FACE_ID' | 'FINGERPRINT' | 'APP_PINCODE'

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiGenericIdentityCertificateModel {
  /** Certificate public key in base64 format */
  publicKey?: string

  /** Encryption type */
  encryptionType?: string

  /**
   * Encryption key size in bits
   * @format int32
   */
  encryptionKeySize?: number
}

export interface PortalUserIdentityModelsApiDeactivateGenericIdentityModel {
  /**
   * Verification code.
   * Encrypted with public key of generic identity that user wants to deactivate.
   * Message format - {creation_datetime_in_ticks}:{identityKeyName}
   */
  code?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiBanksRequestModel {
  countryCode?: string
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiBankModel {
  name?: string
}

export interface PortalPsInpayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  bankName?: string
  fullName?: string
  email?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsInpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  orderDetails?: PortalPsInpayModelsApiOrderDetailsModel
  onlineBankUrl?: string
  parameters?: Record<string, string>
}

export interface PortalPsInpayModelsApiOrderDetailsModel {
  transferAmountWithCurrency?: string
  orderNumber?: string
  name?: string
  email?: string
  orderText?: string
  paymentReference?: string
  paymentInstructions?: Record<string, string>
  bankAccountIban?: string
  bankAccountSwift?: string
  bankLogoUrl?: string
  bankAddress?: string
  accountOwner?: string
}

export interface PortalPsInpayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryName?: string
  beneficiaryEmail?: string
  ownerAddress?: string
  bankCountryCode?: string
  iban?: string
  swiftCode?: string
  bankAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntellectmoneyModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  intellectMoneyAccount?: string
}

export interface PortalPsIntellectmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsIntellectmoneyModelsDepositParametersModel
}

export interface PortalPsIntellectmoneyModelsDepositParametersModel {
  eshopId?: string
  orderId?: string
  serviceName?: string
  recipientAmount?: string
  recipientCurrency?: string
  user_email?: string
  successUrl?: string
  failUrl?: string
  ResultUrl?: string
  preference?: string
  transactionId?: string
  amount?: string
  hash?: string
}

export interface PortalPsIntellectmoneyModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  paymentDate?: string
  paymentCode?: string
}

export interface PortalPsIntercashModelsApiCardListRequestModel {
  /** user card statuses list */
  statuses?: string[]

  /** is card external */
  isExternal?: boolean

  /** is card activated */
  isActivated?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardModel {
  /**
   * intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** card number */
  cardNumber?: string

  /** card currency */
  currency?: string

  /** card balance */
  balance?: string

  /** cardholder name */
  cardholderName?: string

  /** intercash card status */
  cardStatus?: string

  /** card expiration date */
  expirationDate?: string

  /** is activated */
  isActivated?: boolean

  /** is plastic */
  isPlastic?: boolean

  /** is blocked */
  isBlocked?: boolean

  /** is external */
  isExternal?: boolean
}

export interface PortalPsIntercashModelsApiCardDetailsRequestModel {
  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardDetailsResponseModel {
  /** user card pan */
  pan?: string

  /** user card currency code */
  currencyCode?: string

  /** user card cardholder name */
  cardholderName?: string

  /** user card expiration date */
  expirationDate?: string
}

export interface PortalPsIntercashModelsApiCardIssueRequestModel {
  /** cardholder name */
  cardholderName?: string

  /** issue card payment method name. Use api/IntercashApi/PaymentMethods */
  paymentMethod?: string

  /** card type name. Use api/IntercashApi/CardTypes */
  cardType?: string

  /** intercash id type name. Use api/IntercashApi/IdTypes */
  idType?: string

  /** intercash id number */
  idNumber?: string

  /** Card delivery info (required for plastic cards) */
  deliveryInfo?: PortalPsIntercashModelsApiDeliveryInfoModel

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalPsIntercashModelsApiDeliveryInfoModel {
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** City name */
  city?: string

  /** Address */
  address?: string

  /** Zip code */
  zipCode?: string
}

export interface PortalPsIntercashModelsApiCardIssueResponseModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsIntercashModelsApiCardActivationRequestModel {
  /** user card CVV */
  cvv?: string

  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardActivationResponseModel {
  /** intercash card pin code */
  pinCode?: string

  /** user card currency code */
  currencyCode?: string

  /** is card activated */
  isActivated?: boolean
}

export interface PortalPsIntercashModelsApiCardConvertToPlasticModel {
  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardSuspendModel {
  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiCardDeleteModel {
  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsIntercashModelsApiAddModel {
  /** payment option */
  paymentOptionCode?: string

  /** payment route */
  paymentRouteName?: string

  /** merchant code */
  merchantCode?: string

  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** cardholder name */
  cardholderName?: string

  /** card number */
  cardNumber?: string

  /** access code */
  accessCode?: string

  /** expiration month */
  expirationMonth?: string

  /** expiration yaer */
  expirationYear?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalPsIntercashModelsApiWithdrawModel {
  /**
   * chain Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** payment option */
  paymentOptionCode?: string

  /** payment route */
  paymentRouteName?: string

  /** merchant code */
  merchantCode?: string

  /**
   * Intercash card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  intercashCardId?: string

  /** cardholder name */
  cardholderName?: string

  /** card number */
  cardNumber?: string

  /** expiration month */
  expirationMonth?: string

  /** expiration yaer */
  expirationYear?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalUserSettingsModelsUserInformationIpListModel {
  /** The type of Ip access list */
  type?: 'Blacklist' | 'Whitelist'

  /** A list of Ip addresses */
  ipAddresses?: string[]
}

export interface PortalUserSettingsModelsUserInformationIpAddressAddModel {
  ipListType?: 'Blacklist' | 'Whitelist'

  /** Ip address value */
  value?: string
}

export interface PortalUserSettingsModelsUserInformationIpAddressDeleteModel {
  ipListType?: 'Blacklist' | 'Whitelist'

  /** Ip address value */
  value?: string
}

export interface PortalModuleConfigurationModelsApiLanguageLanguageModel {
  /** Language code url extention */
  url?: string

  /** Language name */
  title?: string

  /** Is language selected with culture */
  isSelected?: boolean

  /** Language code */
  code?: string
}

export interface PortalModuleConfigurationModelsApiLanguagePrefferedLanguageUpdateModel {
  /** Language code */
  languageCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiAddModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string
  email?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  ChainId?: string
  GatewayUrl?: string
}

export interface PortalPsLavapayModelsApiNoticeModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string
  email?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsLavapayModelsApiWithdrawModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  lavapayAccount?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserLeadModelsJsonLeadDataRequest {
  /** Client unique identifier */
  clientId?: string

  /** Lead data as key-value structure */
  data?: object
}

export interface PortalUserLeadModelsJsonLeadDataResponse {
  /** Lead data */
  lead?: PortalUserLeadModelsJsonLeadResponse

  /** Redirect uri */
  returnUrl?: string
}

export interface PortalUserLeadModelsJsonLeadResponse {
  /**
   * Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
}

export interface PortalPsLocaldepositModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  senderName?: string
  fullBankName?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsLocaldepositModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankName?: string
  receiverName?: string
  payzaAccount?: string
  address?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsLocalwithdrawalModelsApiLocalWithdrawalBanksModel {
  banks?: PortalPsLocalwithdrawalModelsApiBankModel[]
}

export interface PortalPsLocalwithdrawalModelsApiBankModel {
  name?: string
}

export interface PortalPsLocalwithdrawalModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  receiverName?: string
  email?: string
  bankAccountNumber?: string
  bank?: string
  comment?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalUserLoginModelsApiLoginConfigurationModel {
  identityTypeName?: string
  isExternal?: boolean
  isOAuth?: boolean

  /** @format int32 */
  order?: number
}

export interface PortalUserLoginModelsApiAuthorizeModel {
  identityTypeName?: string
  username?: string
  password?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserLoginModelsApiLoginResultModel {
  token?: OauthCoreModelsTokenModel
}

export interface PortalModuleAuthApiModelsOAuthLoginInitiateModel {
  /** Selected login option */
  identityTypeName?: string

  /**
   * Client app redirection endpoint where API server directs the user-agent
   * after completing its interaction with the external system
   */
  returnUrl?: string

  /**
   * An opaque value used by the client to maintain
   * state between the request and callback.The authorization
   * server includes this value when redirecting the user-agent back
   * to the client.The parameter SHOULD be used for preventing
   * cross-site request forgery as described in https://datatracker.ietf.org/doc/html/rfc6749#section-10.12
   */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleAuthApiModelsOAuthLoginCompleteModel {
  /** Required for new external account binding */
  email?: string

  /** Required when external identity is created for existing user */
  password?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsMerchantModelsTransferRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Merchant account number */
  AccountFrom?: string
  Recipient?: PortalPsMerchantModelsUserDetailsSearchModel

  /** Any string that uniquely identifies the payment on the requester's side */
  PaymentId?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Comment */
  Comment?: string
}

export interface PortalPsMerchantModelsUserDetailsSearchModel {
  SearchType?: 'Id' | 'CryptoAddress' | 'Key' | 'AccountNumber' | 'Email' | 'Phone' | 'ExternalId'
  Value?: string
}

export interface PortalPsMerchantModelsMerchantApiResponseModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment Id */
  PaymentId?: string
}

export interface PortalPsMerchantModelsWithdrawRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier */
  PaymentId?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code according to payment type */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string
}

export interface PortalPsMerchantModelsUserDetailsRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string
  User?: PortalPsMerchantModelsUserDetailsSearchModel
}

export interface PortalPsMerchantModelsUserDetailsModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** User unique identifier */
  UserId?: string

  /** User type name (Demo/Undefined/Corporate/Personal/Joint) */
  UserTypeName?: string

  /**
   * If user's profile type is "Personal" - user's firstname and lastname
   * If user's profile type is "Joint" - primary and secondary applicants' first name and last name
   * If user's profile type is "Corporate" - company name and user's first name and last name
   */
  ProfileName?: string

  /** User first name */
  FirstName?: string

  /** User first name in original */
  FirstNameOriginal?: string

  /** User last name */
  LastName?: string

  /** User last name in original */
  LastNameOriginal?: string

  /** User nickname */
  Nickname?: string

  /** Nationality */
  Nationality?: string

  /** Preferred language */
  PreferedLanguage?: string

  /** Primary phone number */
  PhoneNumber?: string

  /** Login email */
  Email?: string

  /** User country code (ISO 3166-1 alpha-2) */
  CountryIsoCharCode?: string

  /** Reference to the existing city name in Database */
  ReferenceCityName?: string

  /** User city name */
  CityName?: string

  /** User city name in original */
  CityNameOriginal?: string

  /** User address */
  AddressValue?: string

  /** User address value in original */
  AddressValueOriginal?: string

  /** ZipCode number */
  ZipCode?: string

  /** Verification comment */
  DocumentSetCommentDescription?: string

  /**
   * Personal details translation status:
   * Default: user filled personal data in latin,
   * Translated: user's data was translated in latin according to provided by him information in another language,
   * NeedTranslation: user's data needs to be translated
   */
  TranslationStatus?: string

  /**
   * Verification level
   * @format int32
   */
  Grade?: number

  /** User's eWallet number */
  UserTitle?: string

  /** List of user accounts */
  Accounts?: PortalPsMerchantModelsAccountModel[]
}

export interface PortalPsMerchantModelsAccountModel {
  Id?: string
  Title?: string
  CurrencyCode?: string

  /** @format int32 */
  Order?: number
}

export interface PortalPsMerchantModelsPaymentDetailsRequestModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier that merchant provided in withdrawal request */
  PaymentId?: string
}

export interface PortalPsMerchantModelsPaymentDetailsModel {
  /** Response timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier */
  PaymentId?: string

  /** Account unique identifier */
  AccountId?: string

  /** Number of main or trading account with its currency */
  AccountTitle?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code according to payment type */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Payment account */
  PaymentAccount?: string

  /** Payment details */
  PaymentDetails?: string

  /** User unique identifier */
  UserId?: string

  /** User first name */
  FirstName?: string

  /** User first name in original */
  FirstNameOriginal?: string

  /** User last name */
  LastName?: string

  /** User last name in original */
  LastNameOriginal?: string

  /** User nickname */
  Nickname?: string

  /** Nationality */
  Nationality?: string

  /** Preferred language */
  PreferedLanguage?: string

  /** Primary phone number */
  PhoneNumber?: string

  /** Mobile phone number */
  MobilePhoneNumber?: string

  /** Login email */
  Email?: string

  /** User country code (ISO 3166-1 alpha-2) */
  CountryIsoCharCode?: string

  /** Reference to the existing city name in Database */
  ReferenceCityName?: string

  /** User city name */
  CityName?: string

  /** User city name in original */
  CityNameOriginal?: string

  /** User address */
  AddressValue?: string

  /** User address value in original */
  AddressValueOriginal?: string

  /** ZipCode number */
  ZipCode?: string

  /** User's eWallet number */
  UserTitle?: string

  /** User type name (Demo/Undefined/Corporate/Personal/Joint) */
  UserTypeName?: string

  /** Type of the profile (Corporate/Joint/Personal) */
  ProfileType?: string

  /**
   * If user's profile type is "Personal" - user's firstname and lastname
   * If user's profile type is "Joint" - primary and secondary applicants' first name and last name
   * If user's profile type is "Corporate" - company name and user's first name and last name
   */
  ProfileName?: string

  /**
   * Verification level
   * @format int32
   */
  Grade?: number

  /** Verification comment */
  DocumentSetCommentDescription?: string

  /** User is blocked */
  IsUserLockedOut?: boolean

  /**
   * Last date-time of user block
   * @format date-time
   */
  UserLastLockoutDate?: string

  /**
   * Number of unsuccessful login attempts
   * @format int32
   */
  LoginAttemptCount?: number

  /**
   * Personal details translation status:
   * Default: user filled personal data in latin,
   * Translated: user's data was translated in latin according to provided by him information in another language,
   * NeedTranslation: user's data needs to be translated
   */
  TranslationStatus?: string
}

export interface PortalPsMerchantModelsNotificationModel {
  /** Request timestamp in yyyyMMddHHmmss format */
  RequestId?: string

  /** Merchant code */
  MerchantCode?: string

  /** Payment unique identifier that payment platform generated for deposit or merchant provided in withdrawal request */
  PaymentId?: string

  /** Account unique identifier */
  AccountId?: string

  /** Payment type name */
  PaymentTypeCode?: string

  /** Payment option code */
  PaymentOptionCode?: string

  /** Payment direction */
  PaymentRouteCode?: string

  /** Type of balance operation (Credit/Debit) */
  BalanceOperationTypeCode?: string

  /**
   * Payment amount
   * @format double
   */
  Amount?: number

  /** Payment currency code (ISO 4217) */
  CurrencyCode?: string

  /** Current payment status (Succeed/Pending/Rejected/Failed/Recreated) */
  Status?: string

  /** Payment details */
  PaymentDetails?: string
}

export interface PortalPsMinervaModelsApiLocalWireTransferModel {
  accountNumber?: string
  email?: string
  identificationNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string

  /** @format double */
  amount?: number
  addressDetails?: PortalPsMinervaModelsApiAddressDetailsModel

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsMinervaModelsApiAddressDetailsModel {
  address?: string
  district?: string
  cityName?: string
  zipCode?: string
  zipCodeSuffix?: string
  state?: string
}

export interface PortalPsMinervaModelsApiDepositModel {
  gatewayUrl?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsMinervaModelsApiWithdrawModel {
  accountNumber?: string
  email?: string
  identificationNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string

  /** @format double */
  amount?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsMistertangoModelsApiAddModel {
  paymentOptionCode?: string
  misterTangoEmail?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiDepositModel {
  recipient?: string
  languageCode?: string
  payer?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  orderId?: string
  paymentTypeForced?: string
  scriptUrl?: string
}

export interface PortalPsMistertangoModelsApiCreditDebitCardsAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiNoticeModel {
  misterTangoEmail?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMistertangoModelsApiWithdrawModel {
  misterTangoAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiRequestAddByPaymentOptionModel {
  paymentOptionCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  paymentUrl?: string
}

export interface PortalPsMoneybookersModelsApiCreditDebitCardsAddModel {
  paymentOptionCode?: string
  paymentRouteName?: string
  merchantCode?: string
  countryCode?: string
  email?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiLocalWireTransferAddModel {
  paymentOptionCode?: string
  paymentTypeCode?: string
  paymentRouteCode?: string
  countryCode?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiAddModel {
  email?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiRequestWithdrawModel {
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string
  moneybookersAccount?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMoneybookersModelsApiNoticeModel {
  moneybookersAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsMtbankModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
}

export interface PortalPsMtbankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  isAuthRequestSuccessful?: boolean
}

export interface PortalPsMtbankModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  transferType?: 'CORP_CARD_TO_CLIENT_CARD' | 'CORP_CARD_TO_EXT_SYSTEM_CARD'

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  isRefund?: boolean
  state?: string
}

export interface PortalUserIdentityModelsApiMultiFactorConfigurationRequestModel {
  operationCode?:
    | 'BACKUPCODE_ACTIVATION'
    | 'BACKUPCODE_CHANGE'
    | 'BACKUPCODE_DEACTIVATION'
    | 'CLIENT_FACTOR_MANAGEMENT'
    | 'GENERIC_ACTIVATION'
    | 'GENERIC_DEACTIVATION'
    | 'EMAIL_ACTIVATION'
    | 'EMAIL_DEACTIVATION'
    | 'GOOGLEAUTHENTICATOR_ACTIVATION'
    | 'GOOGLEAUTHENTICATOR_DEACTIVATION'
    | 'LOGIN'
    | 'PASSWORD_CHANGE'
    | 'PINCODE_CHANGE'
    | 'SMS_ACTIVATION'
    | 'SMS_DEACTIVATION'
    | 'WITHDRAW'
  financeOperationTypeName?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Identity factor (if specified, method returns only configurations for higher factors) */
  identityFactorCode?: string

  /** Pass URL-encoded (!!!) MFA state to get factors left */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiMultiFactorConfigurationResponseModel {
  identityFactors?: PortalUserIdentityModelsApiIdentityFactorModel[]
}

export interface PortalUserIdentityModelsApiIdentityFactorModel {
  /** Identity factor code */
  code?: string

  /**
   * Identity factor value
   * @format int32
   */
  value?: number

  /** Identity types the user can choose from to complete the factor */
  identityTypes?: PortalUserIdentityModelsApiIdentityTypeModel[]
}

export interface PortalUserIdentityModelsApiIdentityTypeModel {
  /** Identity type name */
  name?: string

  /** Indicates whether current user enabled this identity type */
  isEnabled?: boolean
}

export interface PortalUserIdentityModelsApiVerifyFactorModel {
  /** Current MFA state */
  state?: string

  /** Identity factor the user is verified for */
  identityFactorCode?: string

  /** Identity type that the user wants to continue the authentication with */
  identityTypeName?: string

  /** Verification code */
  code?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityModelsApiMultiFactorInfoModel {
  /** Updated MFA state */
  state?: string
}

export interface PortalPsNabModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsNabModelsInvoiceModel {
  currencyCode?: string
  amount?: string
  accountNumber?: string
  bsbCode?: string
  accountTitle?: string
  lodgementReference?: string
}

export interface PortalPsNabModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOption?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  nabAccountNumber?: string
  bsbCode?: string
  accountTitle?: string
  lodgementReference?: string
  state?: string
}

export interface PortalPsNabModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  lodgementReference?: string
}

export interface PortalPsNcwalletModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Bitcoin address */
  address?: string
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsNetbanxModelsApiCreditDebitCardsAddModel {
  /** payment option code */
  paymentOptionCode?: string

  /** payment route code */
  paymentRouteName?: string

  /** merchant code */
  merchantCode?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalPsNetbanxModelsApiDepositModel {
  /**
   * finance operation chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** payemnt redirect url */
  gatewayUrl?: string
}

export interface PortalPsNetbanxModelsApiLocalWireTransferAddModel {
  /** country code */
  countryCode?: string

  /** payment option code */
  paymentOptionCode?: string

  /** payment route code */
  paymentRouteName?: string

  /** merchant code */
  merchantCode?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalPsNetbanxModelsApiCreditDebitCardsWithdrawModel {
  /** country code */
  countryCode?: string

  /**
   * chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /**
   * user card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** is refund allowed */
  isRefund?: boolean

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number
}

export interface PortalPsNetellerModelsApiAddModel {
  netellerAccountId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsNetellerModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsNetellerModelsApiNoticeModel {
  /** @format date-time */
  transactionDate?: string
  transactionId?: string
  netellerAccountId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsNetellerModelsApiWithdrawModel {
  netellerAccountId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalUserSettingsModelsApiNotificationNotificationTypeModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNotificationContactMethodsRequestModel {
  notificationTypeName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiNotificationContactMethodModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNotificationNotificationSettingModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean

  /** @format double */
  price?: number
}

export interface PortalUserSettingsModelsApiNotificationCreateNotificationModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiNotificationUpdateNotificationModel {
  notificationTypeName?: string
  contactMethodName?: string
  isActive?: boolean
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsOkpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsOkpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsOkpayModelsDepositParametersModel
}

export interface PortalPsOkpayModelsDepositParametersModel {
  ok_receiver?: string
  ok_item_1_name?: string
  ok_item_1_price?: string
  ok_currency?: string
  ok_invoice?: string
}

export interface PortalPsOkpayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  okpayAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsOkpayModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  okpayAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsOplatiModelsApiPaymentInfoRequestModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalPsOplatiModelsApiPaymentInfoModel {
  paymentInstruction?: string
  accountNumber?: string
}

export interface PortalPsOplatiModelsApiNoticeModel {
  serverTransactionId?: string

  /** @format date-time */
  serverTransactionDate?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  purseNumber?: string
}

export interface PortalPsOplatiModelsApiWithdrawModel {
  merchantCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  purseNumber?: string
}

export interface PortalPsOplatiModelsApiPurseModel {
  purseNumber?: string
}

export interface PortalUserSettingsModelsApiOverdraftOverdraftConfigurationCreateModel {
  accountNumber?: string
  allowedAmount?: string
  instanceName?: string
}

export interface PortalUserSettingsModelsApiOverdraftOverdraftDetailsApiModel {
  accountNumber?: string
  userName?: string
  allowedAmount?: string

  /** @format date-time */
  created?: string

  /** @format date-time */
  modified?: string
}

export interface PortalUserSettingsModelsApiOverdraftOverdraftConfigurationRequestModel {
  instanceName?: string
}

export interface PortalUserSettingsModelsApiOverdraftOverdraftConfigurationUpdateModel {
  accountNumber?: string
  allowedAmount?: string
  instanceName?: string
}

export interface PortalUserSettingsModelsApiOverdraftOverdraftConfigurationDeleteModel {
  accountNumber?: string
  instanceName?: string
}

export interface PortalExtensionsPammModelsApiCreatePammAccountModel {
  /** @format int32 */
  clientTradingAccountLogin?: number
  pammAccountTypeName?: string

  /** @format int32 */
  pammAccountLogin?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalExtensionsPammModelsApiJoinPammAccountModel {
  /** @format int32 */
  clientTradingAccountLogin?: number

  /** @format int32 */
  pammAccountLogin?: number
}

export interface PortalExtensionsPammModelsApiRolloverExecutedModel {
  /** @format int32 */
  pammAccountLogin?: number
  pammAccountUsers?: PortalExtensionsPammModelsApiPammAccountUser[]
}

export interface PortalExtensionsPammModelsApiPammAccountUser {
  /** @format int32 */
  clientTradingAccountLogin?: number

  /** @format int32 */
  userType?: number

  /** @format double */
  kus?: number
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorModel {
  /** If only opened accounts are required */
  IsOpenedAccountsRequired?: boolean

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorsStatisticsModel {
  visits?: PortalModulePartnershipModelsVisitorStatisticsApiVisitorListingModel[]

  /** @format int32 */
  totalVisits?: number

  /** @format int32 */
  totalAccountsOpened?: number
}

export interface PortalModulePartnershipModelsVisitorStatisticsApiVisitorListingModel {
  visitingDate?: string
  ipAddress?: string
  visitedPage?: string
  visitedPageLink?: string
  referralPage?: string
  referralPageLink?: string
  isAccountOpened?: boolean
}

export interface PortalModulePartnershipModelsReferralsApiReferralModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  ownerId?: string
  accountNumber?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalModulePartnershipModelsReferralsApiReferralListingModel {
  /**
   * User id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Short account number */
  accountNumber?: string

  /** Fuul trading account number (key + currency + type) */
  tradingAccountNumber?: string

  /** User profile name */
  userName?: string

  /** User country */
  countryName?: string

  /** User email */
  email?: string

  /** User grade */
  gradeName?: string

  /** If user trasfered funds */
  isFunded?: boolean

  /**
   * Relationship creation time
   * @format date-time
   */
  created?: string
}

export interface PortalPsPastabankModelsApiDepositConfigurationModel {
  street?: string
  city?: string
  nameOnCard?: string
  email?: string
  phone?: string
  zipCode?: string
}

export interface PortalPsPastabankModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  street?: string
  city?: string
  nameOnCard?: string
  email?: string
  phone?: string
  zipCode?: string
}

export interface PortalPsPastabankModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPastabankModelsDepositParametersModel
}

export interface PortalPsPastabankModelsDepositParametersModel {
  INTERFACE?: string
  KEY_INDEX?: string
  KEY?: string
  DATA?: string
  SIGNATURE?: string
  CALLBACK?: string
  ERROR_CALLBACK?: string
}

export interface PortalPsPaybal51ModelsApiBankModel {
  code?: string
  name?: string
  originalName?: string
}

export interface PortalPsPaybal51ModelsApiAddModel {
  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Amount in payment currency
   * @format double
   */
  amount?: number

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  bankCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPaybal51ModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaybal51ModelsApiWithdrawModel {
  /** Number of the ewallet which the money will be withdrawn from */
  accountNumber?: string

  /**
   * Amount in account currency
   * @format double
   */
  amount?: number

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /** Payment currency code (ISO 4217) */
  currencyCode?: string
  beneficiaryAccountName?: string
  beneficiaryAccountNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayclubModelsApiAddModel {
  /** Number of the ewallet which the money will be deposited to */
  accountNumber?: string

  /** Account currency code (ISO 4217) */
  accountCurrencyCode?: string

  /**
   * Card ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /**
   * Amount in payment currency
   * @format double
   */
  amount?: number

  /** Payment currency code (ISO 4217) */
  currencyCode?: string

  /** Card verification value (CVV/CVV2/CSC) */
  cvv?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFeeRequestModel {
  /** Balance operation type */
  balanceOperationTypeName?: string

  /** Currency code */
  currencyCode?: string

  /**
   * Amount
   * @format double
   */
  amount?: number

  /** Country code */
  countryCode?: string

  /** Merchant gateway public key */
  gatewayPublicKey?: string

  /** Merchant external user id */
  userId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiFeeModel {
  /** Fee value */
  fee?: string

  /** Amount after applying the fee */
  finalAmount?: string

  /** Fee currency code */
  currencyCode?: string

  /** Indicates if fee is expressed in requested currency */
  isFeeInAmountCurrency?: boolean
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationRequestModel {
  /** Country abbreviation */
  countryCode?: string

  /** Domain name */
  domain?: string

  /** Is aggregator */
  IsAggregator?: boolean

  /** Is external */
  isExternal?: boolean

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Group of payment types(=systems) */
  paymentCategory?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option (method) provided by the payment system */
  paymentOption?: string

  /** Gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationResponseModel {
  result?: FinanceTransferModelsApiPaymentConfigurationPaymentCategoryModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentCategoryModel {
  /** Group of payment systems */
  paymentCategory?: string
  paymentSystems?: FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel {
  /** Payment type name */
  paymentType?: string
  paymentTypeLocalized?: string

  /** Is external */
  isExternal?: boolean

  /** A payment option (method) provided by the payment system */
  paymentOption?: string
  paymentOptionLocalized?: string

  /** Is aggregator */
  isAggregator?: boolean

  /** A gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string
  configuration?: FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationModel[]
  aggregatedPaymentSystems?: FinanceTransferModelsApiPaymentConfigurationPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationModel {
  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Type of finance operation (Add/Notice/Withdraw) */
  financeOperationType?: string
  isOpened?: boolean

  /** Is visible */
  isVisible?: boolean

  /** Payment url */
  url?: string
  currencies?: FinanceTransferModelsApiPaymentConfigurationCurrencyConfigurationModel[]
}

export interface FinanceTransferModelsApiPaymentConfigurationCurrencyConfigurationModel {
  country?: string
  currency?: AtCoreModelsCurrencyModel
  amountRange?: FinanceTransferModelsApiPaymentConfigurationAmountRangeModel
  feeConfigurations?: FinanceTransferModelsApiPaymentConfigurationFeeConfigurationModel[]

  /**
   * For crypto systems only
   * @format int32
   */
  minConfirmationsCount?: number
}

export interface FinanceTransferModelsApiPaymentConfigurationAmountRangeModel {
  /**
   * Lower amount boundary of the payment
   * @format double
   */
  min?: number

  /**
   * Upper amount boundary of the payment
   * @format double
   */
  max?: number
}

export interface FinanceTransferModelsApiPaymentConfigurationFeeConfigurationModel {
  /**
   * Fee percent
   * @format double
   */
  percent?: number

  /**
   * Fee min value
   * @format double
   */
  minValue?: number

  /**
   * Fee max value
   * @format double
   */
  maxValue?: number

  /**
   * Fee constant for target currency
   * @format double
   */
  constant?: number

  /** Target currency */
  targetCurrency?: AtCoreModelsCurrencyModel

  /** Constant requires conversion from target currency to base currency */
  convert?: boolean

  /** Display fee */
  formula?: string
}

export interface FinanceTransferModelsApiPaymentConfigurationRequestModel {
  /** Domain name */
  domain?: string

  /** Country code (ISO 3166-1 alpha-2) */
  country?: string

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Currency code (ISO 4217) */
  currency?: string
}

export interface FinanceTransferModelsApiFeeCollectionModel {
  configurations?: FinanceTransferModelsApiFeeConfigurationModel[]
}

export interface FinanceTransferModelsApiFeeConfigurationModel {
  /** Domain name */
  domain?: string

  /** Country which fee applies in */
  country?: FinanceTransferModelsApiCountryModel

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Base currency (same as payment currency) */
  baseCurrency?: AtCoreModelsCurrencyModel

  /**
   * Percentage fee
   * @format double
   */
  percent?: number

  /**
   * Minimum fee (in base currency)
   * @format double
   */
  minValue?: number

  /**
   * Maximum fee (in base currency)
   * @format double
   */
  maxValue?: number

  /** Target currency */
  targetCurrency?: AtCoreModelsCurrencyModel

  /**
   * Constant fee
   * @format double
   */
  constant?: number

  /** Specifies whether constant amount requires conversion from target currency to base currency */
  convert?: boolean

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string
}

export interface FinanceTransferModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string

  /** Official country name */
  name?: string
}

export interface FinanceTransferModelsApiFeeFormulaRequestModel {
  /** Balance operation type */
  balanceOperationTypeName?: string

  /**
   * Amount
   * @format double
   */
  amount?: number

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsFeeFormulaModel {
  Formulas?: string[]
}

export interface FinanceEwalletModelsApiFinanceOperationStatusModel {
  name?: string

  /** @format int32 */
  value?: number
}

export interface FinanceEwalletModelsApiBackgroundStatusModel {
  name?: string
  code?: string
  isFinal?: boolean
}

export interface FinanceEwalletModelsApiOperationSummaryRequestModel {
  /** eWallet or trading account number */
  account?: string

  /** ISO currency code */
  currencyCode?: string

  /** CreditDebitCards/CUP/InstantBankTransfers/etc. */
  paymentGroupCode?: string

  /** Payment type name */
  paymentType?: string

  /** Way of payment according to paymentType */
  paymentOption?: string

  /** Payment direction */
  paymentRoute?: string

  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string

  /** Current operation state (Failed/Pending/Recreated/Rejected/Succeed) */
  statuses?: string[]

  /**
   * Chain identifier
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface FinanceEwalletModelsApiOperationSummaryResponseModel {
  /** eWallet or trading account number */
  account?: string

  /** List of the operations */
  operations?: FinanceEwalletModelsApiFinanceOperationModel[]

  /**
   * Total number of records
   * @format int32
   */
  total?: number

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number
}

export interface FinanceEwalletModelsApiFinanceOperationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string

  /**
   * Operation creation date
   * @format date-time
   */
  created?: string

  /**
   * Operation processing date
   * @format date-time
   */
  approved?: string

  /**
   * Operation processing date
   * @format date-time
   */
  processed?: string

  /**
   * Spent amount
   * @format double
   */
  amount?: number

  /** Is amount blocked */
  isAmountBlocked?: boolean

  /**
   * Fee
   * @format double
   */
  fee?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel

  /** Balance operation type (Debit/Credit) */
  balanceType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option name */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Payment type name */
  payment?: string

  /** Is external */
  isExternal?: boolean

  /** Current state of the operation */
  status?: string

  /** Operation background status */
  backgroundStatus?: string

  /** Reject reason */
  rejectReason?: string

  /** Operation comment */
  comment?: string

  /** Exchange rate info */
  note?: string

  /**
   * Chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Payment details */
  paymentInfo?: FinanceEwalletModelsApiPaymentInfoModel[]
}

export interface FinanceEwalletModelsApiPaymentInfoModel {
  /** Payment requisite */
  key?: string

  /** Value */
  value?: string
}

export interface FinanceEwalletModelsApiStartBalanceRequestModel {
  /** eWallet or trading account number */
  account?: string

  /** Payment type name */
  paymentType?: string

  /** Way of payment according to paymentType */
  paymentOption?: string

  /** Requested currencies */
  currencies?: string[]

  /**
   * end of period date
   * @format date-time
   */
  dateTo?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceEwalletModelsApiStartBalanceResponseModel {
  /** eWallet or trading account number */
  account?: string

  /** List of the currency balances */
  startBalances?: FinanceEwalletModelsApiCurrencyBalanceModel[]

  /**
   * Total number of records
   * @format int32
   */
  total?: number
}

export interface FinanceEwalletModelsApiCurrencyBalanceModel {
  /**
   * Start amount
   * @format double
   */
  amount?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel
}

export interface FinanceTransferModelsApiBalanceRequestModel {
  /** Account number - if not specified, method returns main account balance */
  account?: string

  /** Currency code (ISO 4217) - if not specified, method returns balances for all existing pockets */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsBalanceResponseModel {
  /**
   * Amount available for trading or transfer to main account
   * @format double
   */
  available?: number

  /**
   * Amount reserved for active orders or incomplete transfers to main account
   * @format double
   */
  reserved?: number

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel

  /**
   * Account Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  account_id?: string
}

export interface FinanceTransferModelsAmountRangeResponseModel {
  /**
   * Lower amount boundary of the payment
   * @format double
   */
  min?: number

  /**
   * Upper amount boundary of the payment
   * @format double
   */
  max?: number
}

export interface FinanceTransferModelsApiPaymentSystemRequestModel {
  /** Type of balance operation (Credit/Debit) */
  balanceOperationType?: string

  /** Group of payment types(=systems) */
  paymentCategory?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option (method) provided by the payment system */
  paymentOption?: string

  /** Gateway which is used for payments processing */
  paymentRoute?: string

  /** Merchant code */
  merchantCode?: string

  /** ISO currency code */
  currencyCode?: string
}

export interface FinanceTransferModelsApiPaymentSystemPaymentSystemResponseModel {
  result?: FinanceTransferModelsApiPaymentSystemPaymentCategoryModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentCategoryModel {
  paymentCategory?: string
  paymentSystems?: FinanceTransferModelsApiPaymentSystemPaymentSystemModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentSystemModel {
  paymentType?: string
  paymentOption?: string
  paymentRoute?: string
  merchantCode?: string
  isAggregator?: boolean
  configuration?: FinanceTransferModelsApiPaymentSystemPaymentConfigurationModel[]
}

export interface FinanceTransferModelsApiPaymentSystemPaymentConfigurationModel {
  balanceOperationType?: string

  /** Payment url */
  url?: string
  countries?: FinanceTransferModelsApiCountryModel[]
  currencies?: AtCoreModelsCurrencyModel[]
}

export interface FinanceTransferModelsApiPaymentAuthorizationModel {
  /**
   * Finance Operation that requires authorization
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string
}

export interface FinanceTransferModelsApiPaymentCancellationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  financeOperationId?: string
}

export interface FinanceTransferModelsApiTransferModel {
  /** Account number */
  accountNumber?: string

  /** Currency code */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentMethodSelectModel {
  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string
  paymentGroupCode?: string
  paymentOptionCode?: string
  merchantCode?: string

  /** Country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentConfigurationModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  isAggregator?: boolean
  isExternal?: boolean
  isOpened?: boolean
  isVisible?: boolean
  paymentGroupCodes?: string[]
}

export interface FinanceTransferModelsApiLimitsRequestModel {
  /** Credit/Debit */
  balanceOperationTypeName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiLimitsResponseModel {
  daily?: FinanceTransferModelsApiLimitModel
  monthly?: FinanceTransferModelsApiLimitModel
}

export interface FinanceTransferModelsApiLimitModel {
  /** @format double */
  limit?: number

  /** @format double */
  volume?: number

  /** @format double */
  availableAmount?: number
  currency?: AtCoreModelsCurrencyModel
}

export interface FinanceTransferModelsApiPaymentTypeAccountCreateRequestModel {
  value?: string
  isDefault?: boolean
  isSavedForFutureUse?: boolean

  /** Template name */
  name?: string
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiPaymentTypeAccountModel {
  /** Template name */
  name?: string

  /** Payment account identifier */
  value?: string

  /** Should this payment account be used by default */
  isDefault?: boolean
}

export interface FinanceConfigurationModelsApiPaymentTypeAccountsRequestModel {
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiPaymentTypeAccountDeleteModel {
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string

  /** Template name */
  name?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentCountriesRequestModel {
  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string
  merchantCode?: string
  paymentGroupCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentCurrenciesRequestModel {
  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string
  merchantCode?: string
  paymentGroupCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** Country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPaymentConfigurationsRequestModel {
  /** Add/Notice/Withdraw */
  financeOperationTypeName?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  paymentGroupCode?: string
  isAggregator?: boolean
  isExternal?: boolean
  isVisible?: boolean

  /** Country code (ISO 3166-1 alpha-2) */
  countryCode?: string

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  name?: string
  email?: string
  phone?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPaymentasiaModelsPaymentParametersModel
}

export interface PortalPsPaymentasiaModelsPaymentParametersModel {
  merchantId?: string
  successUrl?: string
  failUrl?: string
  orderRef?: string

  /** @format double */
  amount?: number
  currCode?: string
  lang?: string

  /** @format int32 */
  gatewayId?: number
  customerEmail?: string
  customerTel?: string
  customerName?: string
  customerProduct?: string
  remark?: string
}

export interface PortalPsPaymentasiaModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPaymentasiaModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  beneficiaryName?: string
  beneficiaryAccountNumber?: string
  bankName?: string
  bankBranchName?: string
  bankProvinceName?: string
  bankCityName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiPriorityConfigurationPaymentCategoryModel {
  code?: string
  name?: string
}

export interface FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationRequestModel {
  domainName?: string
  paymentOptionCode?: string
  paymentCategoryCode?: string
  balanceOperationTypeName?: string
  languageCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string

  /** @format int32 */
  priority?: number
}

export interface FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationUpdateModel {
  configurations?: FinanceConfigurationModelsApiPriorityConfigurationPriorityModel[]
  domainName?: string
  paymentOptionCode?: string
  paymentCategoryCode?: string
  balanceOperationTypeName?: string
  languageCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiPriorityConfigurationPriorityModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** @format int32 */
  priority?: number
}

export interface PortalPsPayomaModelsApiWithdrawParametersRequestModel {
  /** Currency code */
  currencyCode?: string

  /** Country code */
  countryCode?: string

  /** Balance operation type */
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayomaModelsApiWithdrawParametersResponseModel {
  customFields?: string[]
}

export interface PortalPsPayomaModelsApiWithdrawConfigurationModel {
  /** If user has any cards for Payoma */
  hasAnyCards?: boolean

  /** Country of passport */
  passportCountryCode?: string

  /** Finance operation type */
  financeOperationType?: string

  /** Balance operation type */
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayomaModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  middleName?: string
  passportCountryCode?: string
  passport?: string
  passportSeries?: string
  passportIssuer?: string

  /** @format date-time */
  passportIssued?: string

  /** @format date-time */
  passportExpires?: string
  secondDocumentType?: 'Inn' | 'Poms' | 'Snils'
  secondDocumentNumber?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayomaModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPayomaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaypalModelsApiAddModel {
  payPalEmail?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaypalModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaypalModelsApiNoticeModel {
  payPalEmail?: string
  transactionId?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaypalModelsApiWithdrawModel {
  payPalEmail?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  merchantCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPaysafecardModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
}

export interface PortalPsPaysafecardModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPaysafecardModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsPaysafecardModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  paySafeCardAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPaysafecardModelsApiWithdrawResultModel {
  messageCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsPaytodayModelsApiBankModel {
  code?: string
  name?: string
}

export interface PortalPsPaytodayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCode?: string
}

export interface PortalPsPaytodayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  onlineParameters?: PortalPsPaytodayModelsApiDepositParametersModel
  offlineParameters?: PortalPsPaytodayModelsApiOfflineDepositParametersModel
}

export interface PortalPsPaytodayModelsApiDepositParametersModel {
  action?: string
  token?: string
  apiname?: string
  mobile?: string
  email?: string
  name?: string
  deposit?: string
  transec_no?: string

  /** @format double */
  amount?: number
  detail?: string
  bank_code?: string
  return_url?: string
}

export interface PortalPsPaytodayModelsApiOfflineDepositParametersModel {
  image?: string

  /** @format date-time */
  expire?: string
}

export interface PortalPsPaytodayModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
  bankCode?: string
}

export interface PortalPsPaytodayModelsApiWithdrawModel {
  bankAccountNumber?: string
  bankCode?: string
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayzaModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPayzaModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPayzaModelsDepositParametersModel
}

export interface PortalPsPayzaModelsDepositParametersModel {
  ap_purchasetype?: string
  ap_merchant?: string
  ap_itemname?: string
  ap_description?: string
  ap_quantity?: string
  ap_amount?: string
  ap_currency?: string
  ap_item?: string
  apc_1?: string
  apc_2?: string
  ap_returnurl?: string
  ap_cancelurl?: string
}

export interface PortalPsPayzaModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  payzaAccount?: string
  referenceNumber?: string
}

export interface PortalPsPayzaModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  PayzaAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPayzenModelsApiGetInfoModel {
  countryCode?: string
  currencyCode?: string
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiAddModel {
  countryId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPayzenModelsApiNoticeModel {
  account?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiWithdrawModel {
  countryCode?: string
  accountName?: string
  cardNumber?: string
  bankId?: string
  bankBranch?: string

  /** @format int32 */
  provinceCode?: number

  /** @format int32 */
  areaCode?: number
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPayzenModelsApiWithdrawBankTransferModel {
  countryId?: string
  accountName?: string
  bankId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string

  /** @format double */
  amount?: number
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPerfectmoneyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsPerfectmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsPerfectmoneyModelsDepositParametersModel
}

export interface PortalPsPerfectmoneyModelsDepositParametersModel {
  PAYMENT_AMOUNT?: string
  PAYEE_ACCOUNT?: string
  PAYEE_NAME?: string
  SUGGESTED_MEMO?: string
  PAYMENT_UNITS?: string
  STATUS_URL?: string
  PAYMENT_URL?: string
  PAYMENT_URL_METHOD?: string
  NOPAYMENT_URL?: string
  NO_PAYMENT_URL_METHOD?: string
  PAYMENT_ID?: string
  STEP0?: string
}

export interface PortalPsPerfectmoneyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  perfectMoneyAccount?: string

  /** @format date-time */
  transactionDate?: string
  batchCode?: string
}

export interface PortalPsPerfectmoneyModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  perfectMoneyAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsPoliModelsApiBanksRequestModel {
  balanceOperationTypeName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiBankModel {
  name?: string
  code?: string
}

export interface PortalPsPoliModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  bankCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsPoliModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCode?: string
  payerAccountNumber?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPoliModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  countryCode?: string
  bankCode?: string
  payerAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsPrepaidcardModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string
  code?: string
}

export interface PortalPsPrepaidcardModelsApiWithdrawModel {
  state?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  accountNumber?: string
  accountCurrencyCode?: string
  domainName?: string

  /** @format double */
  amount?: number
  cardCurrencyCode?: string
  comment?: string

  /** @format int32 */
  size?: number
}

export interface PortalUserSettingsModelsApiCountryModel {
  /** Country code (ISO 3166-1 alpha-2) */
  code?: string
  name?: string
}

export interface PortalUserSettingsModelsApiCityModel {
  name?: string
}

export interface PortalUserSettingsModelsApiNationalityModel {
  countryCode?: string
  name?: string
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiCorporateProfileUpdateModel {
  /** Company name */
  company?: string

  /** Company website url */
  companyWebsite?: string

  /** Company LEI number */
  legalEntityIdentifier?: string

  /** Function user serves at company */
  jobPosition?: string
  isDirector?: boolean
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiJointProfileUpdateModel {
  title?: 'Empty' | 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr'
  firstName?: string
  lastName?: string

  /** @format date-time */
  dateOfBirth?: string

  /** Nationality name */
  nationality?: string

  /** Country of residence (ISO 3166-1 alpha-2) */
  country?: string

  /** City of residence */
  city?: string

  /** Street address and any apartment number */
  street?: string

  /** ZIP code of residence */
  zipCode?: string
  passportNumber?: string

  /** Client's domain name */
  domainName?: string
}

/**
 * Supply the values only for relevant fields that should be updated
 */
export interface PortalUserSettingsModelsApiPersonalProfileUpdateModel {
  title?: 'Empty' | 'Mr' | 'Mrs' | 'Ms' | 'Miss' | 'Dr'
  firstName?: string
  lastName?: string

  /** @format date-time */
  dateOfBirth?: string

  /** Nationality name */
  nationality?: string

  /** Country of residence (ISO 3166-1 alpha-2) */
  country?: string

  /** City of residence */
  city?: string

  /** Street address and any apartment number */
  street?: string

  /** ZIP code of residence */
  zipCode?: string
  passportNumber?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsQiwiModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  qiwiAccountNumber?: string
}

export interface PortalPsQiwiModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsQiwiModelsDepositParametersModel
}

export interface PortalPsQiwiModelsDepositParametersModel {
  /** Shop Id */
  shop?: string

  /** Transaction Id */
  transaction?: string

  /** Success Url */
  successUrl?: string

  /** Fail Url */
  failUrl?: string
}

export interface PortalPsQiwiModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  billId?: string
  qiwiAccountNumber?: string

  /** @format date-time */
  paymentDate?: string
}

export interface PortalPsQiwiModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  qiwiAccountNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireRequestModel {
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireModel {
  code?: string
  name?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireCreateModel {
  name?: string
  code?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireUpdateModel {
  newCode?: string
  name?: string
  code?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireDeleteModel {
  code?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationRequestModel {
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  questionnaireCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  additionalInformationId?: string

  /** @format int32 */
  order?: number
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationCreateModel {
  questionnaireCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  additionalInformationId?: string

  /** @format int32 */
  order?: number
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  questionnaireCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  additionalInformationId?: string

  /** @format int32 */
  order?: number
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationDeleteModel {
  questionnaireCode?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionQuestionRequestModel {
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionQuestionnaireQuestionModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  questionnaireCode?: string
  isOptional?: boolean

  /** @format int32 */
  order?: number

  /** @format int32 */
  answersCount?: number
  value?: string
  reference?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionQuestionCreateModel {
  questionnaireCode?: string
  isOptional?: boolean

  /** @format int32 */
  order?: number

  /** @format int32 */
  answersCount?: number
  value?: string
  reference?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionQuestionUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  questionnaireCode?: string
  isOptional?: boolean

  /** @format int32 */
  order?: number

  /** @format int32 */
  answersCount?: number
  value?: string
  reference?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionQuestionDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  questionId?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerQuestionnaireAnswerModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  answerTypeCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  questionId?: string
  isCorrect?: boolean
  value?: string

  /** @format int32 */
  order?: number
  reference?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerCreateModel {
  answerTypeCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  questionId?: string
  value?: string

  /** @format int32 */
  order?: number
  isCorrect?: boolean
  reference?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  answerTypeCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  questionId?: string
  value?: string

  /** @format int32 */
  order?: number
  isCorrect?: boolean
  reference?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerTypeRequestModel {
  instanceName?: string
}

export interface PortalUserQuestionnaireModelsApiAnswerAnswerTypeModel {
  code?: string
  name?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireAnswerModel {
  questions?: PortalUserQuestionnaireModelsApiQuestionValueModel[]
  questionnaireCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionValueModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  answers?: PortalUserQuestionnaireModelsApiAnswerValueModel[]
}

export interface PortalUserQuestionnaireModelsApiAnswerValueModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  userValue?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireTemplateRequestModel {
  questionnaireCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserQuestionnaireModelsApiQuestionnaireTemplateModel {
  questionnaireCode?: string
  questions?: PortalUserQuestionnaireModelsApiQuestionTemplateModel[]
}

export interface PortalUserQuestionnaireModelsApiQuestionTemplateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  value?: string
  reference?: string
  answers?: PortalUserQuestionnaireModelsApiAnswerTemplateModel[]
}

export interface PortalUserQuestionnaireModelsApiAnswerTemplateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  value?: string
  reference?: string
  questionAnswerTypeCode?: string
}

export interface PortalPsRbkmoneyModelsApiAddCardsModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  buttonText?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsRbkmoneyModelsApiAddModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  rbkAccount?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsRbkmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsRbkmoneyModelsDepositParametersModel
  method?: string
}

export interface PortalPsRbkmoneyModelsDepositParametersModel {
  eshopId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  orderId?: string
  serviceName?: string
  recipientAmount?: string
  recipientCurrency?: string
  userEmail?: string
  preference?: string
  successUrl?: string
  failUrl?: string
  hash?: string
}

export interface PortalPsRbkmoneyModelsApiNoticeModel {
  accountNumber?: string
  currencyCode?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  rbkTransactionNumber?: string
  rbkUserEmail?: string

  /** @format date-time */
  paymentDate?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiRecoverPasswordModel {
  email?: string
  comment?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiResetPasswordModel {
  /** Password reset key */
  key?: string

  /** New password */
  password?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiRecoveryPasswordLinkExpirationModel {
  /**
   * Recovery id from link
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  recoveryId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserIdentityPasswordModelsApiRecoveryPasswordLinkExpirationResponseModel {
  email?: string

  /**
   * Recovery link lifetime in days
   * @format int32
   */
  linkLifeTime?: number

  /** If this field is set to true, the other fields are not significant */
  isExpired?: boolean
}

export interface PortalUserRecoveryModelsApiRecoveryAccountsRequestModel {
  /** Filter by recovery type ['PinCode', 'TraderPassword', 'InvestorPassword', 'ThreeDSecurePass'] */
  recoveryTypes?: string[]

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiAccountModel {
  accountIdentifier?: string
  accountName?: string
  recoveryTypes?: PortalUserRecoveryModelsApiRecoveryTypeModel[]
}

export interface PortalUserRecoveryModelsApiRecoveryTypeModel {
  name?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionsRequestModel {
  recoveryTypeName?: string
  recoveryStatusName?: string

  /** Number of the account or ID of the user card which recovery action is associated with */
  accountIdentifier?: string

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionsResponseModel {
  data?: PortalUserRecoveryModelsApiRecoveryActionModel[]

  /**
   * Current page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number

  /**
   * Total number of records
   * @format int32
   */
  count?: number
}

export interface PortalUserRecoveryModelsApiRecoveryActionModel {
  /**
   * Recovery action ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /**
   * Recovery action creation date
   * @format date-time
   */
  created?: string
  recoveryTypeName?: string
  recoveryStatusName?: string

  /** Number of the account or ID of the user card which recovery action is associated with */
  accountIdentifier?: string

  /** Account display name */
  accountName?: string

  /**
   * ID of the attached document set to upload required documents
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionCreateModel {
  recoveryTypeName?: string
  accountIdentifier?: string
  comment?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiRecoveryActionUpdateModel {
  /**
   * Recovery action ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  recoveryStatusName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserRecoveryModelsApiResetModel {
  recoveryTypeName?: string

  /** Password reset key */
  key?: string

  /** New password/PIN code/etc. value */
  password?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsRedeemModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  redeemCode?: string
}

export interface PortalPsRedeemModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsRedeemModelsApiRedeemCodesRequestModel {
  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsRedeemModelsApiRedeemCodesCollectionModel {
  codes?: PortalPsRedeemModelsRedeemCodeRequestedModel[]
}

export interface PortalPsRedeemModelsRedeemCodeRequestedModel {
  code?: string
  amount?: string
  currencyCode?: string
  date?: string
  status?: string
}

export interface PortalModuleConfigurationModelsApiRegionRegionNameModel {
  regionName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionRequestRegionsModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionRegionModel {
  name?: string
  countries?: PortalModuleConfigurationModelsApiRegionCountryModel[]
}

export interface PortalModuleConfigurationModelsApiRegionCreateRegionModel {
  regionName?: string
  countryCodes?: string[]

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionUpdateRegionModel {
  currentRegionName?: string
  regionName?: string
  countryCodes?: string[]

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleConfigurationModelsApiRegionDeleteRegionModel {
  regionName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleRegistrationUserModelsApiRegistrationRequestModel {
  email?: string
  password?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleRegistrationUserModelsApiRegistrationResponseModel {
  token?: OauthCoreModelsTokenModel
  clientId?: string
  clientSecret?: string
}

export interface SalvServiceModelsWebhookWebhook {
  action?: string

  /** @format date-time */
  createdTime?: string
  metadata?: SalvServiceModelsWebhookWebhookMetadata
}

export interface SalvServiceModelsWebhookWebhookMetadata {
  alertId?: string
  personId?: string
  transactionId?: string
  entityType?: string
  entityId?: string
  scenarioType?: string
  oldStatus?: string
  newStatus?: string
  status?: string
  sanctionType?: string
  note?: string
  updatedBy?: string
  previousLevel?: string
  currentLevel?: string
}

export interface PortalPsSkrillModelsApiCardIssueParametersResponseModel {
  /** Skrill card merchant id */
  merchantId?: string

  /** Skrill card channel id */
  channelId?: string

  /** Skrill card enviroment */
  enviroment?: string

  /** Is card text mode */
  isTestMode?: boolean

  /** script domain name */
  scriptDomainName?: string
}

export interface PortalPsSkrillModelsApiCreditDebitCardsAddModel {
  /** skrill card country */
  country?: string

  /**
   * Skrill card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number

  /** skrill email */
  email?: string
}

export interface PortalPsSkrillModelsApiCreditDebitCardsWithdrawModel {
  /**
   * Skrill card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /**
   * chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** user phone */
  phone?: string

  /** user mobile */
  mobile?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number

  /** skrill email */
  email?: string
}

export interface PortalPsSkrillModelsApiCardListRequestModel {
  /** card payment option code */
  payemntOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsSkrillModelsApiCardModel {
  /**
   * skrill card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /** skrill card masked pan */
  masked?: string

  /** skrill card brand */
  brand?: string

  /** skrill card expiration month */
  expirationMonth?: string

  /** skrill card expiration year */
  expirationYear?: string
}

export interface PortalPsSkrillModelsApiCardIssueRequestModel {
  /** Skrill card token */
  token?: string

  /** Skrill card last */
  last?: string

  /** Skrill card masked pan */
  masked?: string

  /** Skrill card bin */
  bin?: string

  /** Skrill card expiration month */
  expirationMonth?: string

  /** Skrill card expiration yaer */
  expirationYaer?: string

  /** Skrill card payment option code */
  paymentOptionCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsSkrillModelsApiAddModel {
  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number

  /** skrill email */
  email?: string
}

export interface PortalPsSkrillModelsApiDepositModel {
  /**
   * finance operation chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** payemnt redirect url */
  gatewayUrl?: string
}

export interface PortalPsSkrillModelsApiWithdrawModel {
  /**
   * chain id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number

  /** skrill email */
  email?: string
}

export interface PortalPsSkrillModelsApiNoticeModel {
  /** transaction id */
  transactionId?: string

  /**
   * transaction date
   * @format date-time
   */
  transactionDate?: string

  /** doamin name */
  domainName?: string

  /** user account number */
  accountNumber?: string

  /** user account currency code */
  accountCurrencyCode?: string

  /** card currency code */
  currencyCode?: string

  /**
   * amount
   * @format double
   */
  amount?: number

  /** skrill email */
  email?: string
}

export interface PortalPsSkrillModelsApiCardDeleteModel {
  /**
   * Skrill card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  skrillCardId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendProfileVerificationStatusNotificationModel {
  accountNumber?: string
  status?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendRecoveryNotificationModel {
  accountNumber?: string
  notificationTypeName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  recoveryActionId?: string
  recoveryActionValue?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsApiSmsNotificationSendFinanceOperationStatusChangeNotificationModel {
  accountNumber?: string
  notificationTypeName?: string
  currencyCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  financeOperationTypeCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawParametersRequestModel {
  /** Currency code */
  currencyCode?: string

  /** Country code */
  countryCode?: string

  /** Balance operation type */
  balanceOperationTypeName?: string

  /**
   * User card id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawParametersResponseModel {
  customFields?: string[]
  bankDetailsFields?: string[]
}

export interface PortalPsSorexpayModelsApiWithdrawConfigurationModel {
  /** If user has any cards for SorexPay */
  hasAnyCards?: boolean

  /** Country of passport */
  passportCountryCode?: string

  /** Finance operation type */
  financeOperationType?: string

  /** Balance operation type */
  balanceOperationType?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsSorexpayModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  firstName?: string
  lastName?: string
  middleName?: string
  passportCountryCode?: string
  passport?: string
  secondDocumentType?: 'Inn' | 'Poms' | 'Snils'
  secondDocumentNumber?: string
  iban?: string
  swift?: string
  bankName?: string
  bankAddress?: string
  bankCountryCode?: string
  bankAccountCurrencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsSorexpayModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsSorexpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface VerificationServicesSumsubModelsJsonWebhook {
  type?: string
  applicantId?: string
  applicantType?: string
  externalUserId?: string
  inspectionId?: string
  correlationId?: string

  /**
   * init,
   * pending,
   * queued,
   * completed,
   * onHold
   */
  reviewStatus?: string

  /** @format date-time */
  createdAt?: string
  reviewResult?: VerificationServicesSumsubModelsJsonReviewResult
}

export interface VerificationServicesSumsubModelsJsonReviewResult {
  moderationComment?: string
  clientComment?: string

  /** final answer that should be highly trusted (only 'RED' and 'GREEN' are currently supported) */
  reviewAnswer?: string
  label?: string
  rejectLabels?: string[]
  reviewRejectType?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormRequestModel {
  /** Grade name */
  gradeName?: string

  /** Client's domain name */
  domainName?: string
}

export interface VerificationServicesSumsubModelsApiSumSubVerificationFormModel {
  /** Name of verfication form */
  verificationFormName?: string

  /** If user has any expired documents */
  hasAnyDocumentsForReload?: boolean

  /** SumSub SDK Widget Configuration */
  widgetConfiguration?: VerificationServicesSumsubModelsSumSubVerificationSumSubWidgetConfigurationModel
}

export interface VerificationServicesSumsubModelsSumSubVerificationSumSubWidgetConfigurationModel {
  /**
   * Verification request Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  verificationRequestId?: string

  /** Api url */
  apiUrl?: string

  /** Access token */
  accessToken?: string

  /** Language code */
  languageCode?: string
}

export interface PortalPsTetherModelsApiNoticeModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsTetherModelsApiWithdrawModel {
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  cryptoAddress?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface TpCoreModelsApiTradingProductConfigurationRequestModel {
  /** Trading group name */
  tradingGroup?: string

  /** Trading platform type name */
  tradingPlatformType?: string

  /** Trading product type name */
  tradingProductType?: string

  /** Client's domain name */
  domainName?: string
}

export interface TpCoreModelsApiTradingProductModel {
  /** Trading product code */
  code?: string

  /** Trading platfrom type name */
  tradingPlatformType?: string

  /** Trading product type name */
  tradingProductType?: string
  currencies?: AtCoreModelsCurrencyModel[]
  leverages?: TpCoreModelsApiLeverageModel[]
  allowAgent?: boolean
  allowPromotion?: boolean
  isAgreementRequired?: boolean
  isCompetitionRequired?: boolean
  isDemo?: boolean
  isMultiCurrency?: boolean
  isVisible?: boolean
}

export interface TpCoreModelsApiLeverageModel {
  name?: string

  /** @format int32 */
  value?: number
}

export interface AtTradingModelsTradingAccountCreateModel {
  domainName?: string
  tradingProductCode?: string
  competitionCode?: string
  currencyCode?: string

  /** @format int32 */
  leverageValue?: number

  /** @format double */
  initialAmount?: number
  promotionCode?: string
  agent?: string
}

export interface AtTradingModelsTradingAccountModel {
  accountNumber?: string
  tradingPlatformName?: string
  tradingProductCode?: string
  currency?: AtCoreModelsCurrencyModel
  leverage?: TpCoreModelsApiLeverageModel

  /** @format int64 */
  tradingAccountKey?: number
  password?: string
  webApiToken?: AtTradingModelsWebApiTokenModel
  investorLogin?: string
  investorPassword?: string
}

export interface AtTradingModelsWebApiTokenModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  key?: string
  secret?: string
  rights?: 'Full' | 'Blocked' | 'Readonly'
  authenticationType?: 'HMAC' | 'Basic'
}

export interface TpCoreModelsApiTradingPlatformConfigurationCreateTradingPlatformConfigurationModel {
  domainName?: string
  tradingPlatformTypeName?: string
  name?: string
  code?: string
  url?: string
  serviceLogin?: string
  servicePassword?: string
  serviceAddress?: string
  login?: string
  password?: string
  address?: string
  isPartnershipEnabled?: boolean
  isWebplatformEnabled?: boolean
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatformConfigurationTradingPlatformConfigurationApiModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  tradingPlatformId?: string
  name?: string
  code?: string
  address?: string
  url?: string
  tradingPlatformTypeName?: string
  isPartnershipEnabled?: boolean
  isWebplatformEnabled?: boolean
  domainName?: string
  login?: string
  password?: string
  serviceLogin?: string
  servicePassword?: string
  serviceAddress?: string
}

export interface TpCoreModelsApiTradingPlatformConfigurationRequestTradingPlatformConfigurationCollectionModel {
  domainName?: string
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatformConfigurationUpdateTradingPlatformConfigurationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  domainName?: string
  tradingPlatformTypeName?: string
  name?: string
  code?: string
  url?: string
  serviceLogin?: string
  servicePassword?: string
  serviceAddress?: string
  login?: string
  password?: string
  address?: string
  isPartnershipEnabled?: boolean
  isWebplatformEnabled?: boolean
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatformConfigurationDeleteTradingPlatformConfigurationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatfromSettingCreateTradingPlatformSettingModel {
  tradingPlatformName?: string
  key?: string
  value?: string
  isProtected?: boolean
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatfromSettingTradingPlatformSettingApiModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  tradingPlatformTypeName?: string
  tradingPlatformName?: string
  key?: string
  value?: string
  isProtected?: boolean
}

export interface TpCoreModelsApiTradingPlatfromSettingRequestTradingPlatformSettingsModel {
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatfromSettingUpdateTradingPlatformSettingModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  tradingPlatformName?: string
  key?: string
  value?: string
  isProtected?: boolean
  instanceName?: string
}

export interface TpCoreModelsApiTradingPlatfromSettingDeleteTradingPlatformSettingModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalExtensionsTradingviewModelsRegistrationRequestModel {
  /** affiliate identifier */
  affId?: string

  /** unique request identifier */
  requestID?: string

  /** email */
  email?: string

  /** phone number */
  phone?: string

  /** ISO 3166-1 alpha-2, the country is specified by the user */
  country?: string

  /** first name */
  firstName?: string

  /** last name */
  lastName?: string

  /** ISO 3166-1 alpha-2 phone number registration country code */
  phoneCountryCode?: string

  /** IANA database tz format, user's computer time zone */
  timezone?: string

  /** ISO 639-1, language code */
  language?: string

  /** an optional field that can be shown to the user if Broker wants to instantly create the account with a password */
  password?: string

  /** optional object, if Broker requires additional user’s data, we will add it to this object */
  extra?: string

  /** an optional field, ‘True’ for the test requests */
  isTest?: boolean
}

export interface PortalPsTransactproModelsApiDepositConfigurationModel {
  /** User latin name */
  nameOnCard?: string

  /** User living street */
  street?: string

  /** User living city */
  city?: string

  /** State name (for US residents) */
  state?: string

  /** Zip code */
  zipCode?: string

  /** User phone number */
  phone?: string

  /** User email address */
  email?: string
}

export interface PortalPsTransactproModelsApiAddModel {
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  countryCode?: string
  nameOnCard?: string
  street?: string
  city?: string

  /** State name (for US residents) */
  state?: string
  zipCode?: string
  phone?: string
  email?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsTransactproModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsTransferModelsApiRequestTransferAddModel {
  /** Sender account number */
  accountFrom?: string

  /**
   * Transfer amount
   * @format double
   */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyCode?: string

  /** Recipient account number */
  accountTo?: string

  /** transfer comment */
  comment?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsTransferModelsApiRequestTransferNoticeModel {
  targetAccount?: string

  /** Incoming or outgoing requests */
  isOutgoing?: boolean

  /** Current operation state (Pending/Canceled/Rejected/Approved) */
  statuses?: string[]

  /** @format date-time */
  dateFrom?: string

  /** @format date-time */
  dateTo?: string

  /**
   * Requested page number (default value: 1)
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page (default value: 30)
   * @format int32
   */
  pageSize?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsTransferModelsApiRequestTransferResponseModel {
  /** List of the request transfers */
  transfers?: PortalPsTransferModelsApiRequestTransferModel[]

  /**
   * Total number of records
   * @format int32
   */
  total?: number

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number
}

export interface PortalPsTransferModelsApiRequestTransferModel {
  /**
   * Transfer request Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  requestTransferId?: string

  /**
   * Transfer request creation date
   * @format date-time
   */
  created?: string

  /** eWallet or trading account from number */
  accountFrom?: string

  /** eWallet or trading account to number */
  accountTo?: string

  /**
   * Transfer request modification date
   * @format date-time
   */
  modified?: string

  /** Requested amount */
  amount?: string

  /** ISO currency code */
  currency?: AtCoreModelsCurrencyModel

  /** Current state of the request transfer */
  status?: string

  /** Request transfer comment */
  comment?: string

  /** eWallet or trading modifier account number */
  modifierAccount?: string

  /** Is outgoing */
  isOutgoing?: boolean

  /** Is changable for status modification */
  isChangable?: boolean
}

export interface PortalPsTransferModelsApiRequestTransferActionModel {
  /**
   * Transfer request Id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  requestTransferId?: string

  /** New state of the request transfer */
  status?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiTransferCreateModel {
  /** Sender account number */
  accountFrom?: string

  /**
   * Transfer amount
   * @format double
   */
  amount?: number

  /** Currency code (ISO 4217) */
  currencyFrom?: string

  /** Recipient account number */
  accountTo?: string

  /** Currency code (ISO 4217) */
  currencyTo?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceTransferModelsApiTransferRequestModel {
  /** Sender's eWallet or trading account number */
  accountFrom?: string

  /** Receiver's eWallet or trading account number */
  accountTo?: string

  /** ISO code of base currency */
  currencyFrom?: string

  /** ISO code of target currency */
  currencyTo?: string

  /**
   * Amount to send
   * @format double
   */
  amount?: number

  /** User's PinCode */
  pinCode?: string
}

export interface FinanceTransferModelsApiTransferResponseModel {
  /** Current operation state */
  status?: string

  /** Chain identifier. Is used for giving all available info about financial operations in chain. */
  chainId?: string
}

export interface FinanceTransferModelsApiAccountModel {
  /** Account number */
  accountNumber?: string

  /** Account title */
  name?: string
}

export interface FinanceTransferModelsApiPocketModel {
  currencyCode?: string
  currencyName?: string
}

export interface PortalPsTrustlyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsTrustlyModelsApiTrustlyFinanceOperationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsTrustlyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  orderId?: string
}

export interface PortalPsTrustlyModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsUpholdModelsApiConfigurationModel {
  authorizationLink?: string
}

export interface PortalPsUpholdModelsApiUpholdCardsRequestModel {
  isMerchantCardsRequired?: boolean
  merchantDomainName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsUpholdModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string
}

export interface PortalPsUpholdModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalPsUpholdModelsApiWithdrawModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  upholdCardId?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalUserSettingsModelsUserInformationUserActivityRequestModel {
  /**
   * Lower datestamp bound of the user activity period
   * @format date-time
   */
  dateFrom?: string

  /**
   * Upper datestamp bound of the user activity period
   * @format date-time
   */
  dateTo?: string

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number
}

export interface PortalUserSettingsModelsUserInformationUserActivityResponseModel {
  /**
   * Total number of records
   * @format int32
   */
  total?: number

  /**
   * Page number
   * @format int32
   */
  pageNumber?: number

  /**
   * Number of records per page
   * @format int32
   */
  pageSize?: number

  /** User activities list */
  activities?: PortalUserSettingsModelsUserInformationUserActivityElementModel[]
}

export interface PortalUserSettingsModelsUserInformationUserActivityElementModel {
  /**
   * Date-time of user login
   * @format date-time
   */
  loginDate?: string

  /** Domain name */
  domain?: string

  /** IP address from which the client accessed the system */
  ip?: string

  /** The type of user device */
  userDevice?: string

  /** Identify which browser and version were being used */
  userAgent?: string

  /** Identify which operating system and version were being used */
  operatingSystem?: string

  /** IP address blacklisted */
  ipBlacklisted?: boolean

  /** IP address whitelisted */
  ipWhitelisted?: boolean

  /** Unsuccessful login attempt */
  failed?: boolean
}

export interface PortalUserSettingsModelsUserInformationUserSummaryResponseModel {
  /** eWallet number */
  eWallet?: string

  /** eWallet Iban BIC number */
  ibanBic?: string

  /** User account type */
  userType?: string

  /**
   * eWallet registration date
   * @format date-time
   */
  registrationDate?: string

  /**
   * Last successful user login date
   * @format date-time
   */
  lastLoginDate?: string

  /** Domain where user was successfully authorized last time */
  lastLoginDomain?: string

  /** Primary language */
  preferredLanguage?: string

  /** List of user profiles */
  profiles?: PortalUserSettingsModelsUserInformationProfileModel[]

  /** Verification details */
  verification?: PortalUserSettingsModelsUserInformationVerificationModel

  /** A list of user account security settings */
  accountSecuritySettings?: PortalUserSettingsModelsUserInformationAccountSecuritySettingsModel
}

export interface PortalUserSettingsModelsUserInformationProfileModel {
  /** Account type name */
  type?: string

  /** Name of the system to which a profile information belongs */
  referenceType?: string

  /** Current profile */
  active?: boolean

  /** User nickname in the system */
  nickname?: string

  /** User title */
  title?: string

  /** User first name */
  firstName?: string

  /** User first name in original */
  firstNameOriginal?: string

  /** User last name */
  lastName?: string

  /** User last name in original */
  lastNameOriginal?: string

  /** Date of birth */
  dateOfBirth?: string

  /** Nationality */
  nationality?: string

  /** Passport Id number */
  passportIdNumber?: string

  /** User address */
  address?: PortalUserSettingsModelsUserInformationAddressModel

  /** List of user contacts */
  contacts?: PortalUserSettingsModelsUserInformationContactModel[]

  /** Company name */
  companyName?: string

  /** Company name in original */
  companyNameOriginal?: string

  /** Company web site URL */
  webSiteUrl?: string

  /** Appointment in the company */
  position?: string

  /** The user holds a position of director in the company */
  director?: boolean

  /** A unique code(identifier) ​​assigned to legal entities in accordance with the RSM ISO 17442 standard and used in conducting transactions and reporting in financial markets */
  legalEntityIdentifier?: string

  /** Current employment state */
  employmentStatus?: string

  /** The name of the employer company */
  employeeName?: string

  /** Company activity type */
  natureOfBusiness?: string
}

export interface PortalUserSettingsModelsUserInformationVerificationModel {
  /** Current user grade */
  grade?: string

  /** A list of uploaded documents */
  documentSets?: PortalUserSettingsModelsUserInformationDocumentSetModel[]
}

export interface PortalUserSettingsModelsUserInformationAccountSecuritySettingsModel {
  /** A list of enabled Identity factors */
  multiFactorVerification?: PortalUserSettingsModelsUserInformationMultiFactorVerificationModel[]
}

export interface PortalUserSettingsModelsUserInformationAddressModel {
  /** Country name */
  country?: string

  /** Country code */
  countryCode?: string

  /** District name */
  district?: string

  /** State name */
  state?: string

  /** State name in original */
  stateOriginal?: string

  /** City name */
  cityName?: string

  /** City name in original */
  cityNameOriginal?: string

  /** Address value */
  value?: string

  /** Address value in original */
  valueOriginal?: string

  /** Zip code number */
  zipCode?: string

  /** Last 4 digits of a zip code that represent a specific delivery route within that overall delivery area */
  zipCodeSuffix?: string
}

export interface PortalUserSettingsModelsUserInformationContactModel {
  /** Contact method name */
  contactMethod?: string

  /** Contact value */
  value?: string

  /** Prefferable contact for communication */
  primary?: boolean

  /** The user doesn't mind that this contact is used for communication with him */
  allowed?: boolean

  /** User was contacted */
  achieved?: boolean

  /** The contact is verified by user */
  verified?: boolean

  /** Contact is used for sending  notification messages */
  sendNotifications?: boolean
}

export interface PortalUserSettingsModelsUserInformationDocumentSetModel {
  /** Name of the system to which a profile information belongs */
  type?: string

  /** Uploaded documents */
  documents?: PortalUserSettingsModelsUserInformationDocumentModel[]

  /** Comment left by user who verified provided documents */
  comment?: string
}

export interface PortalUserSettingsModelsUserInformationMultiFactorVerificationModel {
  /** Name of the Identity action */
  action?: string

  /** Action is switched on */
  enabled?: boolean
}

export interface PortalUserSettingsModelsUserInformationDocumentModel {
  /** A type of the document */
  type?: string

  /** Current status of the document */
  status?: string

  /** Comment left by user who verified client document */
  comment?: string
}

export interface PortalUserSettingsModelsUserInformationSearchUserRequestModel {
  /** User login data */
  users?: string[]

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserSettingsModelsUserInformationUserModel {
  /** User login data */
  user?: string

  /** User account number */
  accountNumber?: string

  /** User first name */
  firstName?: string

  /** User last name */
  lastName?: string
}

export interface PortalUserBlockModelsApiUserStatusModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalUserBlockModelsApiAccountBlockModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  accountId?: string
  accountNumber?: string
  accountDisplayNumber?: string
  accountCurrencyCode?: string
  changedBy?: string
  changedByIban?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  commentId?: string
  commentDescription?: string
  customComment?: string
  isActive?: boolean
  isArchived?: boolean
  isChangedByUserNameClickable?: boolean

  /** @format date-time */
  statusChangedDate?: string
}

export interface PortalUserBlockModelsApiUserBlockModel {
  accountIds?: string[]
  isEnabled?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  commentId?: string
  customComment?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormModel {
  /** Name of verfication form */
  verificationFormName?: string

  /**
   * Document set ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string

  /** Comment for document set */
  documentSetComment?: string

  /** Types of document set elements */
  documentSetElements?: string[]

  /** If user has any documents in document set */
  hasAnyDocuments?: boolean

  /** If document set is already verified */
  isAlreadyVerified?: boolean

  /** Max file size (Mb) */
  fileSizeMax?: string

  /** Extensions of files valid to be uploaded */
  allowedExtensions?: string[]
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentsVerificationModel {
  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUploadDocumentModel {
  /**
   * Document set ID
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  documentSetId?: string

  /** Document type name */
  documentType?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
  status?: string
  comment?: string

  /** @format date-time */
  expirationDate?: string
  isCanBeDeleted?: boolean
  number?: string

  /** @format date-time */
  issuingDate?: string
}

export interface PortalModuleVerificationModelsApiDocumentsVerificationDocumentDeleteModel {
  /**
   * Id of requested document
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
}

export interface PortalModuleAuthApiModelsRegisterApplicantRequestModel {
  applicantId?: string
  verificationServiceName?: string
}

export interface PortalModuleAuthApiModelsRegisterApplicantResponseModel {
  /** Applicant Id */
  applicantId?: string
  clientCredentials?: PortalModuleAuthApiModelsClientCredentialsModel
}

export interface PortalModuleAuthApiModelsClientCredentialsModel {
  /** Client Id */
  clientId?: string

  /** Client Secret */
  clientSecret?: string
}

export interface PortalModuleVerificationModelsApiDocumentTypesRequestModel {
  /** Grade */
  gradeName?: string

  /** Document set element */
  documentSetElementName?: string

  /** Document set type */
  documentSetTypeName?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUserGradesModel {
  name?: string
  nameLocalized?: string
  grades?: PortalModuleVerificationModelsApiGradeGroupModel[]
}

export interface PortalModuleVerificationModelsApiGradeGroupModel {
  name?: string
  nameLocalized?: string
  verificationStatuses?: PortalModuleVerificationModelsApiVerificationStatusModel[]
}

export interface PortalModuleVerificationModelsApiVerificationStatusModel {
  form?: string
  formLocalized?: string
  status?: string
  statusLocalized?: string
}

export interface PortalModuleVerificationModelsApiVerificationConfigurationRequestModel {
  /** Country code (ISO 3166-1 alpha-2) - if not set, method will return configurations for user's local personal profile country */
  countryCode?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiVerificationConfigurationModel {
  grades?: PortalModuleVerificationModelsApiGradeModel[]
}

export interface PortalModuleVerificationModelsApiGradeModel {
  /** Grade name */
  name?: string

  /**
   * Grade value
   * @format int32
   */
  value?: number

  /** Indicates current user's grade */
  isCurrent?: boolean

  /** Steps of the grade verification procedure */
  steps?: PortalModuleVerificationModelsApiVerificationStepModel[]
}

export interface PortalModuleVerificationModelsApiVerificationStepModel {
  /**
   * Verification step number
   * @format int32
   */
  value?: number

  /** Verification forms the user can choose from to complete the verification step */
  forms?: PortalModuleVerificationModelsApiVerificationFormModel[]
}

export interface PortalModuleVerificationModelsApiVerificationFormModel {
  /** Verification form name */
  name?: string

  /** Verification status of the form (can be null if the user hasn't started verification yet) */
  status?: 'Requested' | 'Approved' | 'Rejected' | 'Filling'

  /**
   * Verification form priority
   * @format int32
   */
  value?: number
}

export interface PortalModuleVerificationModelsApiUserTypesRequestModel {
  isEditable?: boolean

  /** Client's domain name */
  domainName?: string
}

export interface PortalModuleVerificationModelsApiUserTypeModel {
  name?: string
  isEditable?: boolean
}

export interface PortalModuleVerificationModelsApiUserTypeUpdateModel {
  /** New user type name */
  userType?: string

  /** MFA state */
  state?: string

  /** Client's domain name */
  domainName?: string
}

export interface FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationRequestModel {
  domainName?: string
  paymentTypeCode?: string
  merchantCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  accountNumber?: string

  /** @format date-time */
  modified?: string
  domainName?: string
  languageCode?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string

  /** @format int32 */
  order?: number
  isVisible?: boolean
  isOpened?: boolean
  gradeName?: string
  is2FAuthRequired?: boolean
  financeOperationTypeName?: string
  countryCode?: string
  regionName?: string
  userTypeName?: string
  paymentGroupCurrentCode?: string
  paymentGroupRestrictedCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationCreateModel {
  /** eWallet, trading account, email, crypto address belong to user */
  user?: string
  domainName?: string
  languageCode?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string

  /** @format int32 */
  order?: number
  isVisible?: boolean
  isOpened?: boolean
  gradeName?: string
  is2FAuthRequired?: boolean
  financeOperationTypeName?: string
  countryCode?: string
  regionName?: string
  userTypeName?: string
  paymentGroupCurrentCode?: string
  paymentGroupRestrictedCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /** eWallet, trading account, email, crypto address belong to user */
  user?: string
  domainName?: string
  languageCode?: string
  merchantCode?: string
  paymentTypeCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  balanceOperationTypeName?: string

  /** @format int32 */
  order?: number
  isVisible?: boolean
  isOpened?: boolean
  gradeName?: string
  is2FAuthRequired?: boolean
  financeOperationTypeName?: string
  countryCode?: string
  regionName?: string
  userTypeName?: string
  paymentGroupCurrentCode?: string
  paymentGroupRestrictedCode?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalPsWalletoneModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsWalletoneModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWalletoneModelsDepositParametersModel
}

export interface PortalPsWalletoneModelsDepositParametersModel {
  WMI_MERCHANT_ID?: string
  WMI_PAYMENT_AMOUNT?: string
  WMI_CURRENCY_ID?: string
  WMI_PAYMENT_NO?: string
  WMI_DESCRIPTION?: string
  WMI_SUCCESS_URL?: string
  WMI_FAIL_URL?: string
  WMI_AUTO_ACCEPT?: string
  WMI_PTENABLED?: string
  WMI_SIGNATURE?: string
}

export interface PortalPsWalletoneModelsApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  walletOneAccount?: string

  /** @format date-time */
  transactionDate?: string
  transactionId?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  bank?: FinanceConfigurationModelsApiBankModel
  backgroundStatusCode?: string
  currencyCode?: string
  financeOperationTypeName?: string
  paymentGroupCode?: string
  paymentTypeName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface FinanceConfigurationModelsApiBankModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  name?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationCreateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  backgroundStatusCode?: string
  currencyCode?: string
  financeOperationTypeName?: string
  paymentGroupCode?: string
  paymentTypeName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  backgroundStatusCode?: string
  currencyCode?: string
  financeOperationTypeName?: string
  paymentGroupCode?: string
  paymentTypeName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginRequestModel {
  domainName?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  identityTypeName?: string
  roleName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginCreateModel {
  identityTypeName?: string
  roleName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginUpdateModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  identityTypeName?: string
  roleName?: string
  url?: string
  domainName?: string
  userName?: string
  iban?: string
  instanceName?: string
}

export interface PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginDeleteModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  id?: string
  instanceName?: string
}

export interface PortalPsWebmoneyModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsWebmoneyModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWebmoneyModelsDepositParametersModel
}

export interface PortalPsWebmoneyModelsDepositParametersModel {
  /** Payee purse */
  LMI_PAYEE_PURSE?: string

  /**
   * Payment amount
   * @format double
   */
  LMI_PAYMENT_AMOUNT?: number

  /** Payment number */
  LMI_PAYMENT_NO?: string

  /** Result url */
  LMI_RESULT_URL?: string

  /** Success url */
  LMI_SUCCESS_URL?: string

  /** Fail url */
  LMI_FAIL_URL?: string

  /** Payment description */
  LMI_PAYMENT_DESC?: string

  /** User ip */
  user_ip?: string

  /** User server */
  user_server?: string

  /**
   * Transaction id
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  transaction?: string
}

export interface PortalPsWebmoneyModelsApiNoticeModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  purseNumber?: string
  securityCode?: string
}

export interface PortalPsWebmoneyModelsApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  purseNumber?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsWebpayModelsApiAddModel {
  domainName?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
}

export interface PortalPsWebpayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsWebpayModelsDepositParametersModel
}

export interface PortalPsWebpayModelsDepositParametersModel {
  '*scart'?: string
  wsb_version?: string
  wsb_storeid?: string
  wsb_order_tag?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wsb_order_num?: string
  wsb_currency_id?: string
  wsb_return_url?: string
  wsb_cancel_return_url?: string
  wsb_notify_url?: string
  wsb_customer_id?: string

  /** @format int32 */
  wsb_test?: number
  'wsb_invoice_item_name[0]'?: string

  /** @format int32 */
  'wsb_invoice_item_quantity[0]'?: number
  'wsb_invoice_item_price[0]'?: string
  wsb_total?: string
  wsb_phone?: string
  wsb_email?: string

  /** @format int64 */
  wsb_seed?: number
  wsb_signature?: string
}

export interface PortalPsWebpayModelsApiWithdrawModel {
  domainName?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  userCardId?: string
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  currencyCode?: string
  isRefund?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
  paymentOptionCode?: string
  paymentRouteCode?: string
  merchantCode?: string
}

export interface PortalPsWireModelsApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string

  /** Payer name */
  russianName?: string

  /** Payer address */
  address?: string
}

export interface PortalPsWireModelsApiDepositModel {
  invoice?: object

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
}

export interface PortalPsWireModelsApiBankDetailsRequestModel {
  domainName?: string
  paymentOptionCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  currencyCode?: string

  /** Payer name */
  russianName?: string

  /** Payer address */
  address?: string
}

export interface PortalPsWireModelsApiBankDetailsModel {
  bankDetails?: object
}

export interface PortalPsWireModelsApiBankRequestModel {
  bankCountryCode?: string
  currencyCode?: string
  paymentTypeAccountValue?: string
  beneficiaryAccountNumber?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBankModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  nfsType?: string
}

export interface PortalPsWireModelsApiTransferDetailsRequestModel {
  bankCode?: string
  beneficiaryAccountNumber?: string
  nfsType?: string
}

export interface PortalPsWireModelsApiTransferDetailsModel {
  bankName?: string
  bankCountry?: string
  bankCity?: string
  swiftCode?: string
}

export interface PortalPsWireModelsApiAdditionalDetailsRequestModel {
  bankCountryCode?: string
  currencyCode?: string
  accountNumber?: string
  paymentTypeAccountValue?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiAdditionalDetailsModel {
  details?: PortalPsWireModelsApiAdditionalDetailModel[]
}

export interface PortalPsWireModelsApiAdditionalDetailModel {
  systemKey?: string
  key?: string
  value?: string
  isEditable?: boolean
  isRequired?: boolean
  reference?: string
}

export interface PortalPsWireModelsApiWithdrawModel {
  domainName?: string
  paymentOptionCode?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  bankCountryCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  nfsType?: 'Swift' | 'Aba' | 'Iban' | 'Bik' | 'Bsb'

  /** Bik/Aba/Swift value */
  bankCode?: string

  /** Bank/institution name */
  bankName?: string

  /** Iban */
  beneficiaryAccountNumber?: string

  /** Individual taxpayer number (for bik only) */
  individualTaxpayerNumber?: string

  /** Bank account number (for bik only) */
  bankAccountNumber?: string

  /** Payment edited details */
  editedDetails?: PortalPsWireModelsApiEditedDetailModel[]

  /** Payment type account */
  paymentTypeAccountValue?: string

  /** If need to save template */
  saveAsTemplate?: boolean

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string

  /** MFA state */
  state?: string
}

export interface PortalPsWireModelsApiEditedDetailModel {
  systemKey?: string
  value?: string
}

export interface PortalPsWireModelsApiBankCurrenciesRequestModel {
  balanceOperationTypeName?: string
  countryCode?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBankCountriesRequestModel {
  balanceOperationTypeName?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiNfsOptionsRequestModel {
  countryCode?: string
  currencyCode?: string
}

export interface PortalPsWireModelsApiNfsOptionModel {
  name?: string
}

export interface PortalPsWireModelsApiBanksRequestModel {
  balanceOperationTypeName?: string
  countryCode?: string
  currencyCode?: string
  gatewayPublicKey?: string
  userId?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiBanksResponseModel {
  banks?: SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[]
  russianTransferFields?: string[]
}

export interface PortalPsWireModelsApiCountryByAccountNumberRequestModel {
  balanceOperationTypeName?: string
  paymentTypeAccountValue?: string
  value?: string

  /** Payment type name */
  paymentType?: string

  /** Payment option code */
  paymentOption?: string

  /** Payment route name */
  paymentRoute?: string

  /** Merchant code */
  merchant?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsWireModelsApiCountryModel {
  countryCode?: string
}

export interface PortalPsWireModelsApiInvoiceHeaderModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wireId?: string
  paymentOption?: string
  accountNumber?: string
  amount?: string
  currencyCode?: string
}

export interface PortalPsWireModelsApiInvoiceRequestModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  wireId?: string

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsYandexmoneyModelApiAddModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
}

export interface PortalPsYandexmoneyModelApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
  parameters?: PortalPsYandexmoneyModelDepositParametersModel
}

export interface PortalPsYandexmoneyModelDepositParametersModel {
  shopId?: string
  scid?: string
  sum?: string
  customerNumber?: string
  orderNumber?: string
  shopSuccessURL?: string
  shopFailURL?: string
  paymentType?: string
  user_ip?: string
  BankId?: string
}

export interface PortalPsYandexmoneyModelApiNoticeModel {
  domainName?: string
  paymentOptionCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  yandexMoneyAccount?: string
  transactionId?: string

  /** @format date-time */
  transactionDate?: string
}

export interface PortalPsYandexmoneyModelApiWithdrawModel {
  domainName?: string
  merchantCode?: string
  accountNumber?: string
  accountCurrencyCode?: string

  /** @format double */
  amount?: number
  currencyCode?: string
  yandexMoneyAccount?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  state?: string
}

export interface PortalPsZotapayModelsApiAddModel {
  accountNumber?: string
  accountCurrencyCode?: string
  currencyCode?: string
  PaymentOptionCode?: string

  /** @format double */
  amount?: number

  /** Client's domain name */
  domainName?: string
}

export interface PortalPsZotapayModelsApiDepositModel {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  chainId?: string
  gatewayUrl?: string
}

export interface PortalPsZotapayModelsApiWithdrawModel {
  accountNumber?: string

  /** @format double */
  amount?: number
  accountCurrencyCode?: string
  beneficiaryAccountNumber?: string
  currencyCode?: string
  PaymentOptionCode?: string

  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  bankId?: string
  bankProvince?: string
  bankCity?: string
  bankBranch?: string
  routingNumber?: string

  /** Client's domain name */
  domainName?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  key?: string
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemDecimalMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull {
  /** @format double */
  key?: number
  value?: AtCoreModelsCurrencyModel
}

export interface FinanceConversionModelsSymbolResponseModel1AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull {
  /** Symbol code */
  name?: string

  /** Symbol description */
  description?: string

  /** Asset 1 */
  asset1?: AtCoreModelsCurrencyModel

  /** Asset 2 */
  asset2?: AtCoreModelsCurrencyModel
}

export interface FinanceConversionModelsSymbolResponseModel1SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** Symbol code */
  name?: string

  /** Symbol description */
  description?: string

  /** Asset 1 */
  asset1?: string

  /** Asset 2 */
  asset2?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** @format int32 */
  key?: number
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /** @format int32 */
  key?: number
  value?: string
}

export interface SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089 {
  /**
   * @format uuid
   * @example 00000000-0000-0000-0000-000000000000
   */
  key?: string
  value?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://api.fxopen.co.uk'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  public getSecurityData = (): SecurityDataType | null => {
    return this.securityData
  }

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key])
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch(e => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title portal.webapi
 * @version v1
 * @baseUrl https://api.fxopen.co.uk
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiCardWithdraw
     * @summary Withdraw funds by card via Accentpay (only for authorized users)
     * @request POST:/api/AccentpayApi/Card/Withdraw
     */
    accentpayApiCardWithdraw: (
      model: PortalPsAccentpayModelsApiCardWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AccentpayApi/Card/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiAdd
     * @summary Add funds via Accentpay (only for authorized users)
     * @request POST:/api/AccentpayApi/Add
     */
    accentpayApiAdd: (model: PortalPsAccentpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAccentpayModelsApiDepositModel, void>({
        path: `/api/AccentpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiNotice
     * @summary Notice about adding funds via Accentpay (only for authorized users)
     * @request POST:/api/AccentpayApi/Notice
     */
    accentpayApiNotice: (
      model: PortalPsAccentpayModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/AccentpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Accentpay
     * @name AccentpayApiWithdraw
     * @summary Withdraw funds via Accentpay (only for authorized users)
     * @request POST:/api/AccentpayApi/Withdraw
     */
    accentpayApiWithdraw: (
      model: PortalPsAccentpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AccentpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Provide detailed information about trading account.
     *
     * @tags Account
     * @name AccountApiAccountDetails
     * @summary Account Information (only for authorized users)
     * @request GET:/api/AccountApi/AccountDetails
     */
    accountApiAccountDetails: (query: { accountNumber: string }, params: RequestParams = {}) =>
      this.request<OauthCoreModelsAccountDetailsResponseModel, void>({
        path: `/api/AccountApi/AccountDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountApiCollection
     * @summary User Accounts (only for authorized users)
     * @request GET:/api/AccountApi/Collection
     */
    accountApiCollection: (query?: { accountType?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleAuthApiModelsAccountsResponseModel, void>({
        path: `/api/AccountApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountRange
     * @name AccountRangeApiCollection
     * @summary Account Ranges (only for authorized users)
     * @request GET:/api/AccountRangeApi/Collection
     */
    accountRangeApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAccountrangeModelsApiAccountRangeModel[], void>({
        path: `/api/AccountRangeApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountRange
     * @name AccountRangeApiCreate
     * @summary Create Account Range (only for authorized users)
     * @request POST:/api/AccountRangeApi/Create
     */
    accountRangeApiCreate: (
      model: PortalModuleAccountrangeModelsApiCreateAccountRangeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAccountrangeModelsApiAccountRangeModel, void>({
        path: `/api/AccountRangeApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountRange
     * @name AccountRangeApiUpdate
     * @summary Update Account Range (only for authorized users)
     * @request POST:/api/AccountRangeApi/Update
     */
    accountRangeApiUpdate: (
      model: PortalModuleAccountrangeModelsApiUpdateAccountRangeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/AccountRangeApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountRange
     * @name AccountRangeApiDelete
     * @summary Delete Account Range (only for authorized users)
     * @request POST:/api/AccountRangeApi/Delete
     */
    accountRangeApiDelete: (
      model: PortalModuleAccountrangeModelsApiDeleteAccountRangeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/AccountRangeApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationConfigurationApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/AdditionalInformationApi/Configuration/Collection
     */
    additionalInformationConfigurationApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationApiModel[],
        any
      >({
        path: `/api/AdditionalInformationApi/Configuration/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationConfigurationApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Configuration/Create
     */
    additionalInformationConfigurationApiCreate: (
      model: PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationApiModel,
        any
      >({
        path: `/api/AdditionalInformationApi/Configuration/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationConfigurationApiUpdate
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Configuration/Update
     */
    additionalInformationConfigurationApiUpdate: (
      model: PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/AdditionalInformationApi/Configuration/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationConfigurationApiDelete
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Configuration/Delete
     */
    additionalInformationConfigurationApiDelete: (
      model: PortalUserAdditionalModelsApiAdditionalInformationConfigurationAdditionalInformationConfigurationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/AdditionalInformationApi/Configuration/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationApiFormPaths
     * @summary  (only for authorized users)
     * @request GET:/api/AdditionalInformationApi/FormPaths
     */
    additionalInformationApiFormPaths: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserAdditionalModelsApiFormPathModel[], any>({
        path: `/api/AdditionalInformationApi/FormPaths`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/AdditionalInformationApi/Collection
     */
    additionalInformationApiCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserAdditionalModelsApiAdditionalInformationModel[], any>({
        path: `/api/AdditionalInformationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Create
     */
    additionalInformationApiCreate: (
      model: PortalUserAdditionalModelsApiCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserAdditionalModelsApiAdditionalInformationModel, any>({
        path: `/api/AdditionalInformationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationApiDelete
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Delete
     */
    additionalInformationApiDelete: (
      model: PortalUserAdditionalModelsApiDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/AdditionalInformationApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AdditionalInformation
     * @name AdditionalInformationApiUpdate
     * @summary  (only for authorized users)
     * @request POST:/api/AdditionalInformationApi/Update
     */
    additionalInformationApiUpdate: (
      model: PortalUserAdditionalModelsApiUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/AdditionalInformationApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiAdd
     * @summary Add funds via Advcash (only for authorized users)
     * @request POST:/api/AdvcashApi/Add
     */
    advcashApiAdd: (model: PortalPsAdvcashModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAdvcashModelsApiDepositModel, void>({
        path: `/api/AdvcashApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiNotice
     * @summary Notice about adding funds via Advcash (only for authorized users)
     * @request POST:/api/AdvcashApi/Notice
     */
    advcashApiNotice: (model: PortalPsAdvcashModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/AdvcashApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advcash
     * @name AdvcashApiWithdraw
     * @summary Withdraw funds via Advcash (only for authorized users)
     * @request POST:/api/AdvcashApi/Withdraw
     */
    advcashApiWithdraw: (
      model: PortalPsAdvcashModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AdvcashApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiAdd
     * @summary Add funds via Airtm (only for authorized users)
     * @request POST:/api/AirtmApi/Add
     */
    airtmApiAdd: (model: PortalPsAirtmModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAirtmModelsApiDepositModel, void>({
        path: `/api/AirtmApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiNotice
     * @summary Notice about adding funds via Airtm (only for authorized users)
     * @request POST:/api/AirtmApi/Notice
     */
    airtmApiNotice: (model: PortalPsAirtmModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/AirtmApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airtm
     * @name AirtmApiWithdraw
     * @summary Withdraw funds via Airtm (only for authorized users)
     * @request POST:/api/AirtmApi/Withdraw
     */
    airtmApiWithdraw: (model: PortalPsAirtmModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AirtmApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiAdd
     * @summary Add funds via AlfaBank (only for authorized users)
     * @request POST:/api/AlfaBankApi/Add
     */
    alfaBankApiAdd: (model: PortalPsAlfabankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAlfabankModelsApiDepositModel, void>({
        path: `/api/AlfaBankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiWithdraw
     * @summary Withdraw funds via AlfaBank (only for authorized users)
     * @request POST:/api/AlfaBankApi/Withdraw
     */
    alfaBankApiWithdraw: (
      model: PortalPsAlfabankModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AlfaBankApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AlfaBank
     * @name AlfaBankApiAvailableWithdrawBalance
     * @summary Get available balance to withdraw (only for authorized users)
     * @request GET:/api/AlfaBankApi/AvailableWithdrawBalance
     */
    alfaBankApiAvailableWithdrawBalance: (
      query?: { userCardId?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsAlfabankModelsApiAvailableWithdrawBalanceModel, any>({
        path: `/api/AlfaBankApi/AvailableWithdrawBalance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiProvinces
     * @summary Get provinces list (only for authorized users)
     * @request GET:/api/Allpay88Api/Provinces
     */
    allpay88ApiProvinces: (query?: { provinceCode?: string }, params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiProvinceModel[], void>({
        path: `/api/Allpay88Api/Provinces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/Allpay88Api/Banks
     */
    allpay88ApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiBankModel[], void>({
        path: `/api/Allpay88Api/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiAdd
     * @summary Add funds via AllPay88 (only for authorized users)
     * @request POST:/api/Allpay88Api/Add
     */
    allpay88ApiAdd: (model: PortalPsAllpay88ModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAllpay88ModelsApiDepositModel, void>({
        path: `/api/Allpay88Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Allpay88
     * @name Allpay88ApiWithdraw
     * @summary Withdraw funds via AllPay88 (only for authorized users)
     * @request POST:/api/Allpay88Api/Withdraw
     */
    allpay88ApiWithdraw: (
      model: PortalPsAllpay88ModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/Allpay88Api/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags AmountRange
     * @name AmountRangeApiGet
     * @summary Amount range configuration collection (only for authorized users)
     * @request GET:/api/AmountRangeApi/Get
     */
    amountRangeApiGet: (
      query?: { domainName?: string; paymentTypeCode?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiAmountRangeAmountRangeModel[], void>({
        path: `/api/AmountRangeApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags AmountRange
     * @name AmountRangeApiCreate
     * @summary Create amount range configuration (only for authorized users)
     * @request POST:/api/AmountRangeApi/Create
     */
    amountRangeApiCreate: (
      model: FinanceConfigurationModelsApiAmountRangeAmountRangeCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiAmountRangeAmountRangeModel, void>({
        path: `/api/AmountRangeApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags AmountRange
     * @name AmountRangeApiUpdate
     * @summary Update amount range configuration (only for authorized users)
     * @request PUT:/api/AmountRangeApi/Update
     */
    amountRangeApiUpdate: (
      model: FinanceConfigurationModelsApiAmountRangeAmountRangeUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiAmountRangeAmountRangeModel, void>({
        path: `/api/AmountRangeApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags AmountRange
     * @name AmountRangeApiDelete
     * @summary Delete specified amount range configuration (only for authorized users)
     * @request DELETE:/api/AmountRangeApi/Delete
     */
    amountRangeApiDelete: (
      model: FinanceConfigurationModelsApiAmountRangeAmountRangeDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/AmountRangeApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiAdd
     * @summary Add funds via Astropay (only for authorized users)
     * @request POST:/api/AstropayApi/Add
     */
    astropayApiAdd: (model: PortalPsAstropayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAstropayModelsApiDepositModel, void>({
        path: `/api/AstropayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiNotice
     * @summary Notice about adding funds via Astropay (only for authorized users)
     * @request POST:/api/AstropayApi/Notice
     */
    astropayApiNotice: (model: PortalPsAstropayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/AstropayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Astropay
     * @name AstropayApiWithdraw
     * @summary Withdraw funds via Astropay (only for authorized users)
     * @request POST:/api/AstropayApi/Withdraw
     */
    astropayApiWithdraw: (
      model: PortalPsAstropayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AstropayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method is used for token reissue procedure while access + refresh tokens are expired. For authorization client uses DeviceId and DeviceSecret (Base64 encrypted) which he got in response of ConfirmBinding method. The user step by step passes the verification factors and in a result receives new authorization data.
     *
     * @tags Auth
     * @name TokenReissueApiTokenReissue
     * @summary Request Token Reissue
     * @request POST:/api/TokenReissueApi/TokenReissue
     */
    tokenReissueApiTokenReissue: (
      model: PortalModuleAuthExternalModelsTokenIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsTokenIssueResponseModel, void>({
        path: `/api/TokenReissueApi/TokenReissue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns boolean value indicating whether security code is sent
     *
     * @tags Auth
     * @name TokenReissueApiSendCode
     * @summary Send Security Code
     * @request POST:/api/TokenReissueApi/SendCode
     */
    tokenReissueApiSendCode: (
      model: PortalModuleAuthExternalModelsTokenReissueSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/TokenReissueApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Initiates request for the registration procedure
     *
     * @tags Auth
     * @name ExternalDeviceApiRegistration
     * @summary Registration
     * @request POST:/api/ExternalDeviceApi/Registration
     */
    externalDeviceApiRegistration: (
      model: PortalModuleAuthExternalModelsRegistrationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsRegisteredDeviceModel, void>({
        path: `/api/ExternalDeviceApi/Registration`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Initiates request for establishing communication between two systems. The method is also used for reactivation ExternalDeviceIdentity where the client get a new QR-code (in Cabinet on Settings/AccountSecurity page ) after  clicking "Reactivate" button.
     *
     * @tags Auth
     * @name ExternalDeviceApiBinding
     * @summary Request Binding
     * @request POST:/api/ExternalDeviceApi/Binding
     */
    externalDeviceApiBinding: (
      model: PortalModuleAuthExternalModelsBindingRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthExternalModelsTokenIssueResponseModel, void>({
        path: `/api/ExternalDeviceApi/Binding`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns boolean value indicating whether security code is sent
     *
     * @tags Auth
     * @name ExternalDeviceApiSendCode
     * @summary Send Security Code
     * @request POST:/api/ExternalDeviceApi/SendCode
     */
    externalDeviceApiSendCode: (
      model: PortalModuleAuthExternalModelsBindingSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/ExternalDeviceApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ExternalDeviceApiUpdate
     * @summary Update Custom Parameter Value (only for authorized users)
     * @request POST:/api/ExternalDeviceApi/Update
     */
    externalDeviceApiUpdate: (
      model: PortalModuleAuthExternalModelsUpdateDeviceSettingModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ExternalDeviceApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name ExternalDeviceApiSettings
     * @summary External Device Settings (only for authorized users)
     * @request GET:/api/ExternalDeviceApi/Settings
     */
    externalDeviceApiSettings: (query?: { deviceId?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleAuthExternalModelsDeviceSettingModel[], void>({
        path: `/api/ExternalDeviceApi/Settings`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The introspection endpoint is an OAuth 2.0 endpoint that takes a parameter representing an OAuth 2.0 token and returns a JSON document representing the meta information surrounding the token, including whether this token is currently active.
     *
     * @tags Auth
     * @name OAuthApiIntrospect
     * @summary Introspection endpoint
     * @request POST:/api/OAuthApi/Introspect
     */
    oAuthApiIntrospect: (data: { token: string }, params: RequestParams = {}) =>
      this.request<
        { active: boolean; user_id?: string; token_type?: string; exp?: number; iat?: number },
        void
      >({
        path: `/api/OAuthApi/Introspect`,
        method: 'POST',
        body: data,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name OAuthApiRevoke
     * @summary Revoke Token (only for authorized users)
     * @request POST:/api/OAuthApi/Revoke
     */
    oAuthApiRevoke: (params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/OAuthApi/Revoke`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name QrCodeApiSignIn
     * @summary Sign In (only for authorized users)
     * @request POST:/api/QrCodeApi/SignIn
     */
    qrCodeApiSignIn: (
      model: PortalModuleAuthExternalModelsSignInModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QrCodeApi/SignIn`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/AwepayApi/Banks
     */
    awepayApiBanks: (query?: { currencyCode?: string }, params: RequestParams = {}) =>
      this.request<PortalPsAwepayModelsApiBankModel[], void>({
        path: `/api/AwepayApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiAdd
     * @summary Add funds via Awepay (only for authorized users)
     * @request POST:/api/AwepayApi/Add
     */
    awepayApiAdd: (model: PortalPsAwepayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsAwepayModelsApiDepositModel, void>({
        path: `/api/AwepayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Awepay
     * @name AwepayApiWithdraw
     * @summary Withdraw funds via Awepay (only for authorized users)
     * @request POST:/api/AwepayApi/Withdraw
     */
    awepayApiWithdraw: (model: PortalPsAwepayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/AwepayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the bank products collection.
     *
     * @tags Bank
     * @name BankProductApiCollection
     * @summary Bank products (only for authorized users)
     * @request GET:/api/BankProductApi/Collection
     */
    bankProductApiCollection: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/BankProductApi/Collection`,
        method: 'GET',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name BankAccountApiCreate
     * @summary Create bank account (only for authorized users)
     * @request POST:/api/BankAccountApi/Create
     */
    bankAccountApiCreate: (
      model: AtBankModelsCreateAccountRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<AtBankModelsAccountResponseModel, void>({
        path: `/api/BankAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bePaid
     * @name BePaidApiAdd
     * @summary Add funds via BePaid (only for authorized users)
     * @request POST:/api/BePaidApi/Add
     */
    bePaidApiAdd: (request: PortalPsBepaidModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsBepaidModelsApiDepositModel, void>({
        path: `/api/BePaidApi/Add`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags bePaid
     * @name BePaidApiWithdraw
     * @summary Withdraw funds via BePaid (only for authorized users)
     * @request POST:/api/BePaidApi/Withdraw
     */
    bePaidApiWithdraw: (model: PortalPsBepaidModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/BePaidApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiAdd
     * @summary Add funds via BfoPay (only for authorized users)
     * @request POST:/api/BfopayApi/Add
     */
    bfopayApiAdd: (model: PortalPsBfopayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsBfopayModelsApiDepositModel, void>({
        path: `/api/BfopayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiNotice
     * @summary Notice about adding funds via BfoPay (only for authorized users)
     * @request POST:/api/BfopayApi/Notice
     */
    bfopayApiNotice: (model: PortalPsBfopayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/BfopayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bfopay
     * @name BfopayApiWithdraw
     * @summary Withdraw funds via BfoPay (only for authorized users)
     * @request POST:/api/BfopayApi/Withdraw
     */
    bfopayApiWithdraw: (model: PortalPsBfopayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/BfopayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardConfigurationApiIssueLimit
     * @summary Get card issue limit (only for authorized users)
     * @request GET:/api/CardConfigurationApi/IssueLimit
     */
    cardConfigurationApiIssueLimit: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        cardFormTypeCode?: string
        currencyCode?: string
        countryCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardIssueLimitModel, void>({
        path: `/api/CardConfigurationApi/IssueLimit`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardTemplateApiSave
     * @summary Save card for future payments (only for authorized users)
     * @request POST:/api/CardTemplateApi/Save
     */
    cardTemplateApiSave: (
      model: PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel, any>({
        path: `/api/CardTemplateApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardTemplateApiDelete
     * @summary Delete saved card (only for authorized users)
     * @request DELETE:/api/CardTemplateApi/Delete
     */
    cardTemplateApiDelete: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/CardTemplateApi/Delete`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name UserCardApiExpirationDateMonth
     * @summary Gets month collection
     * @request GET:/api/UserCardApi/ExpirationDateMonth
     */
    userCardApiExpirationDateMonth: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/UserCardApi/ExpirationDateMonth`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name UserCardApiExpirationDateYear
     * @summary Gets year collection
     * @request GET:/api/UserCardApi/ExpirationDateYear
     */
    userCardApiExpirationDateYear: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/UserCardApi/ExpirationDateYear`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiCreate
     * @summary Save card for future payments (only for authorized users)
     * @request POST:/api/CardApi/Create
     * @deprecated
     */
    cardApiCreate: (
      model: PortalPsCreditdebitcardsModelsApiCardTemplateSaveModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel, any>({
        path: `/api/CardApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGet
     * @summary Get user's cards (only for authorized users)
     * @request GET:/api/CardApi/Get
     */
    cardApiGet: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        cardStatusName?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardModel[], void>({
        path: `/api/CardApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGetInfo
     * @summary OBSOLETE!!! Instead collect data from GET api/CardApi/Get, GET api/CardApi/Balance and GET api/CardApi/DeliveryInfo (only for authorized users)
     * @request GET:/api/CardApi/GetInfo/{id}
     * @deprecated
     */
    cardApiGetInfo: (id: string, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardFullDetailsModel, any>({
        path: `/api/CardApi/GetInfo/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiGetBalance
     * @summary OBSOLETE!!! Use GET api/CardApi/Balance instead (only for authorized users)
     * @request GET:/api/CardApi/GetBalance/{id}
     * @deprecated
     */
    cardApiGetBalance: (id: string, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardBalanceModel, any>({
        path: `/api/CardApi/GetBalance/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiBalance
     * @summary Get card balance (only for authorized users)
     * @request GET:/api/CardApi/Balance
     */
    cardApiBalance: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardCurrencyBalanceModel[], any>({
        path: `/api/CardApi/Balance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiDeliveryInfo
     * @summary Get delivery info for plastic card (only for authorized users)
     * @request GET:/api/CardApi/DeliveryInfo
     */
    cardApiDeliveryInfo: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiDeliveryInfoModel, any>({
        path: `/api/CardApi/DeliveryInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiConfiguration
     * @summary Get available card issue options (only for authorized users)
     * @request GET:/api/CardApi/Configuration
     */
    cardApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardProductsModel, any>({
        path: `/api/CardApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiValidateDocuments
     * @summary Check if user has all necessary documents to issue specified type of card (only for authorized users)
     * @request GET:/api/CardApi/ValidateDocuments
     */
    cardApiValidateDocuments: (
      query?: {
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiDocumentValidationResultModel, any>({
        path: `/api/CardApi/ValidateDocuments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method returns true if card was issued successfully
     *
     * @tags Card
     * @name CardApiIssue
     * @summary Issue a new card (only for authorized users)
     * @request POST:/api/CardApi/Issue
     */
    cardApiIssue: (
      model: PortalPsCreditdebitcardsModelsApiIssueCardModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/CardApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description If provided activation code is valid, method changes card status from Pending to Active.
     *
     * @tags Card
     * @name CardApiActivate
     * @summary Activate plastic card (only for authorized users)
     * @request POST:/api/CardApi/Activate
     */
    cardApiActivate: (
      model: PortalPsCreditdebitcardsModelsApiActivateCardModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/CardApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method is designed for both plastic and virtual cards. The selected card's status must be 'Active'.
     *
     * @tags Card
     * @name CardApiFreeze
     * @summary Block card (only for authorized users)
     * @request POST:/api/CardApi/Freeze
     */
    cardApiFreeze: (
      model: PortalPsCreditdebitcardsModelsApiFreezeCardModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CardApi/Freeze`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method is designed for both plastic and virtual cards. The selected card's status must be 'Blocked'.
     *
     * @tags Card
     * @name CardApiDefrost
     * @summary Unblock card (only for authorized users)
     * @request POST:/api/CardApi/Defrost
     */
    cardApiDefrost: (
      model: PortalPsCreditdebitcardsModelsApiDefrostCardModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CardApi/Defrost`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Functionality is available only for active cards. Method returns true if security code was sent successfully.
     *
     * @tags Card
     * @name CardApiSendSecurityCode
     * @summary Retrieve virtual card CVV or plastic card PIN code (only for authorized users)
     * @request POST:/api/CardApi/SendSecurityCode
     * @deprecated
     */
    cardApiSendSecurityCode: (
      model: PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, any>({
        path: `/api/CardApi/SendSecurityCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Functionality is available only for active cards. If isRetrieveSuccessful - true and other parameters - null, security code sent by sms
     *
     * @tags Card
     * @name CardApiRetrieveCardDetails
     * @summary Retrieve virtual or plastic card details(PIN\CVV and Ppan) depending on configuration (only for authorized users)
     * @request POST:/api/CardApi/RetrieveCardDetails
     */
    cardApiRetrieveCardDetails: (
      model: PortalPsCreditdebitcardsModelsApiSendSecurityCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardDetailsResponseModel, any>({
        path: `/api/CardApi/RetrieveCardDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiDelete
     * @summary Delete saved card (only for authorized users)
     * @request DELETE:/api/CardApi/Delete
     * @deprecated
     */
    cardApiDelete: (
      query?: { userCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/CardApi/Delete`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardApiTransactions
     * @summary Card transactions (only for authorized users)
     * @request GET:/api/CardApi/Transactions
     */
    cardApiTransactions: (
      query?: {
        account?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCreditdebitcardsModelsApiCardTransactionsResponseModel, any>({
        path: `/api/CardApi/Transactions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method blocks current card forever and issues a new card instead. By default the new card will be delivered to the same address that was specified on card issue.
     *
     * @tags Card
     * @name CardApiReplace
     * @summary Replace plastic card (only for authorized users)
     * @request POST:/api/CardApi/Replace
     */
    cardApiReplace: (
      model: PortalPsCreditdebitcardsModelsApiReplaceCardModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/CardApi/Replace`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description If you made a deposit via credit/debit card, but the funds were not credited to your account, use the payment notification form.
     *
     * @tags Card
     * @name CardApiNotice
     * @summary Notice about adding funds via credit/debit card (only for authorized users)
     * @request POST:/api/CardApi/Notice
     */
    cardApiNotice: (
      model: PortalPsCreditdebitcardsModelsApiCardNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CardApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiCities
     * @summary Get cities list (only for authorized users)
     * @request GET:/api/CashExApi/Cities
     */
    cashExApiCities: (
      query?: { countryCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashExCityModel[], void>({
        path: `/api/CashExApi/Cities`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiServices
     * @summary Get services list (only for authorized users)
     * @request GET:/api/CashExApi/Services
     */
    cashExApiServices: (
      query?: { countryCode?: string; cityId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashExServiceModel[], void>({
        path: `/api/CashExApi/Services`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiAdd
     * @summary Add funds via CashEx (only for authorized users)
     * @request POST:/api/CashExApi/Add
     */
    cashExApiAdd: (model: PortalPsCashuModelsApiCashExAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashExDepositModel, void>({
        path: `/api/CashExApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashEX
     * @name CashExApiNotice
     * @summary Notice about adding funds via CashEx (only for authorized users)
     * @request POST:/api/CashExApi/Notice
     */
    cashExApiNotice: (model: PortalPsCashuModelsApiCashExNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/CashExApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiAdd
     * @summary Add funds via CASHU (only for authorized users)
     * @request POST:/api/CashuApi/Add
     */
    cashuApiAdd: (model: PortalPsCashuModelsApiCashuAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashuDepositModel, void>({
        path: `/api/CashuApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiNotice
     * @summary Notice about adding funds via CASHU (only for authorized users)
     * @request POST:/api/CashuApi/Notice
     */
    cashuApiNotice: (model: PortalPsCashuModelsApiCashuNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/CashuApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashU
     * @name CashuApiWithdraw
     * @summary Withdraw funds via CASHU (only for authorized users)
     * @request POST:/api/CashuApi/Withdraw
     */
    cashuApiWithdraw: (
      model: PortalPsCashuModelsApiCashuCashuWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/CashuApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiCountries
     * @summary Get countries list (only for authorized users)
     * @request GET:/api/CashuDirectApi/Countries
     */
    cashuDirectApiCountries: (params: RequestParams = {}) =>
      this.request<PortalPsCashuModelsApiCashuDirectCountryModel[], void>({
        path: `/api/CashuDirectApi/Countries`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiAdd
     * @summary Add funds via CASHU Direct (only for authorized users)
     * @request POST:/api/CashuDirectApi/Add
     */
    cashuDirectApiAdd: (
      model: PortalPsCashuModelsApiCashuDirectAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCashuModelsApiCashuDirectDepositModel, void>({
        path: `/api/CashuDirectApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags cashUDirect
     * @name CashuDirectApiNotice
     * @summary Notice about adding funds via CASHU Direct (only for authorized users)
     * @request POST:/api/CashuDirectApi/Notice
     */
    cashuDirectApiNotice: (
      model: PortalPsCashuModelsApiCashuDirectNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CashuDirectApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiCreate
     * @summary Request a crypto address for future deposits (only for authorized users)
     * @request POST:/api/CoinPaymentsAddressApi/Create
     */
    coinPaymentsAddressApiCreate: (
      model: PortalPsCoinpaymentsModelsApiCreateDepositAddressModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiDepositAddressModel, void>({
        path: `/api/CoinPaymentsAddressApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiSave
     * @summary Save a crypto address as template for withdrawals (only for authorized users)
     * @request POST:/api/CoinPaymentsAddressApi/Save
     */
    coinPaymentsAddressApiSave: (
      model: PortalPsCoinpaymentsModelsApiSaveTemplateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiTemplateModel, void>({
        path: `/api/CoinPaymentsAddressApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsAddressApiTemplates
     * @summary Get user's saved templates (only for authorized users)
     * @request GET:/api/CoinPaymentsAddressApi/Templates
     */
    coinPaymentsAddressApiTemplates: (
      query?: { currencyCode?: string; cryptoTokenStandardCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiTemplateModel[], void>({
        path: `/api/CoinPaymentsAddressApi/Templates`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiAdd
     * @summary Fixed price payment via CoinPayments (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Add
     */
    coinPaymentsApiAdd: (
      model: PortalPsCoinpaymentsModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCoinpaymentsModelsApiDepositModel, void>({
        path: `/api/CoinPaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiNotice
     * @summary Notice about adding funds via CoinPayments (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Notice
     */
    coinPaymentsApiNotice: (
      model: PortalPsCoinpaymentsModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CoinPaymentsApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CoinPayments
     * @name CoinPaymentsApiWithdraw
     * @summary Withdraw funds via CoinPayments (only for authorized users)
     * @request POST:/api/CoinPaymentsApi/Withdraw
     */
    coinPaymentsApiWithdraw: (
      model: PortalPsCoinpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/CoinPaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name CommentApiCommentTemplateTypes
     * @summary Get comment template types (only for authorized users)
     * @request GET:/api/CommentApi/CommentTemplateTypes
     */
    commentApiCommentTemplateTypes: (params: RequestParams = {}) =>
      this.request<PortalModuleCommentModelsApiCommentTemplateTypeModel[], void>({
        path: `/api/CommentApi/CommentTemplateTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comment
     * @name CommentApiComments
     * @summary Get comments (only for authorized users)
     * @request GET:/api/CommentApi/Comments
     */
    commentApiComments: (
      query?: { commentTemplateTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleCommentModelsApiCommentModel[], void>({
        path: `/api/CommentApi/Comments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiStatuses
     * @summary Existing competition statuses
     * @request GET:/api/CompetitionApi/Statuses
     */
    competitionApiStatuses: (params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/CompetitionApi/Statuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiCompetitions
     * @summary List of competitions by status and currency code
     * @request GET:/api/CompetitionApi/Competitions
     */
    competitionApiCompetitions: (
      query?: { status?: string[]; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionModel[], void>({
        path: `/api/CompetitionApi/Competitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiMainInfo
     * @summary Main info about competition
     * @request GET:/api/CompetitionApi/MainInfo
     */
    competitionApiMainInfo: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionModel, void>({
        path: `/api/CompetitionApi/MainInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiGetSchedule
     * @summary Competition schedule
     * @request GET:/api/CompetitionApi/GetSchedule
     */
    competitionApiGetSchedule: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitionScheduleModel, void>({
        path: `/api/CompetitionApi/GetSchedule`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTop
     * @summary Top most popular competitions for given period
     * @request GET:/api/CompetitionApi/Top
     */
    competitionApiTop: (
      query?: { fromDate?: string; toDate?: string; count?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonTopCompetitionCollectionModel, void>({
        path: `/api/CompetitionApi/Top`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiUserInfo
     * @summary User main info
     * @request GET:/api/CompetitionApi/UserInfo
     */
    competitionApiUserInfo: (
      query?: { userId?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserInfoModel, void>({
        path: `/api/CompetitionApi/UserInfo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopUserCompetitions
     * @summary Top best competitions in which user has taken part
     * @request GET:/api/CompetitionApi/TopUserCompetitions
     */
    competitionApiTopUserCompetitions: (
      query?: { userId?: string; fromDate?: string; toDate?: string; count?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserCompetitionModel[], void>({
        path: `/api/CompetitionApi/TopUserCompetitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopTrades
     * @summary Top best user trades in competitions
     * @request GET:/api/CompetitionApi/TopTrades
     */
    competitionApiTopTrades: (
      query?: { userId?: string; fromDate?: string; toDate?: string; count?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonTradeModel[], void>({
        path: `/api/CompetitionApi/TopTrades`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiMembers
     * @summary Competition members
     * @request GET:/api/CompetitionApi/Members
     */
    competitionApiMembers: (
      query?: { pageNumber?: number; pageSize?: number; searchInput?: string; code?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonCompetitorModel[], void>({
        path: `/api/CompetitionApi/Members`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiAnnualPrize
     * @summary Prize won by the user for a given year by month
     * @request GET:/api/CompetitionApi/AnnualPrize
     */
    competitionApiAnnualPrize: (
      query?: { userId?: string; year?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserMonthlyPrizeModel[], void>({
        path: `/api/CompetitionApi/AnnualPrize`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiGameAccount
     * @summary Game account summary
     * @request GET:/api/CompetitionApi/GameAccount
     */
    competitionApiGameAccount: (query?: { accountKey?: number }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonGameAccountModel, void>({
        path: `/api/CompetitionApi/GameAccount`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTradingDetails
     * @summary Trading details
     * @request GET:/api/CompetitionApi/TradingDetails
     */
    competitionApiTradingDetails: (query?: { accountKey?: number }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonUserTradingDetailsModel[], void>({
        path: `/api/CompetitionApi/TradingDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiTopTraders
     * @summary Top best traders for given period
     * @request GET:/api/CompetitionApi/TopTraders
     */
    competitionApiTopTraders: (
      query?: { fromDate?: string; toDate?: string; count?: number; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonUserInfoModel[], void>({
        path: `/api/CompetitionApi/TopTraders`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiPrizeConditions
     * @summary Conditions required to receive prize
     * @request GET:/api/CompetitionApi/PrizeConditions
     */
    competitionApiPrizeConditions: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/CompetitionApi/PrizeConditions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiAccountFeatures
     * @summary Features of game accounts
     * @request GET:/api/CompetitionApi/AccountFeatures
     */
    competitionApiAccountFeatures: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonAccountFeaturesModel, void>({
        path: `/api/CompetitionApi/AccountFeatures`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiSymbols
     * @summary Available symbols
     * @request GET:/api/CompetitionApi/Symbols
     */
    competitionApiSymbols: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<string[], void>({
        path: `/api/CompetitionApi/Symbols`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiPrize
     * @summary Competition prize
     * @request GET:/api/CompetitionApi/Prize
     */
    competitionApiPrize: (
      query?: { currencyCode?: string; code?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalExtensionsForexcupModelsJsonPrizeModel, void>({
        path: `/api/CompetitionApi/Prize`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiJoinCompetition
     * @summary Join competition (only for authorized users)
     * @request POST:/api/CompetitionApi/JoinCompetition
     */
    competitionApiJoinCompetition: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/CompetitionApi/JoinCompetition`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiUserCompetitions
     * @summary All competitions of authorized user (only for authorized users)
     * @request GET:/api/CompetitionApi/UserCompetitions
     */
    competitionApiUserCompetitions: (query?: { code?: string }, params: RequestParams = {}) =>
      this.request<PortalExtensionsForexcupModelsJsonUserCompetitionModel[], void>({
        path: `/api/CompetitionApi/UserCompetitions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Competition
     * @name CompetitionApiSetPrizeAccount
     * @summary Sets selected account as account for competition prize (only for authorized users)
     * @request POST:/api/CompetitionApi/SetPrizeAccount
     */
    competitionApiSetPrizeAccount: (query: { accountNumber: string }, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/api/CompetitionApi/SetPrizeAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description For user with any role
     *
     * @tags Configuration
     * @name ConfigurationApiParameterCollection
     * @summary Configuration parameters collection (only for authorized users)
     * @request GET:/api/ConfigurationApi/ParameterCollection
     */
    configurationApiParameterCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiConfigurationParameterModel[], void>({
        path: `/api/ConfigurationApi/ParameterCollection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Configuration
     * @name ConfigurationApiCollection
     * @summary Configuration collection (only for authorized users)
     * @request GET:/api/ConfigurationApi/Collection
     */
    configurationApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalModuleConfigurationModelsApiConfigurationConfigurationParameterModel[],
        void
      >({
        path: `/api/ConfigurationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Configuration
     * @name ConfigurationApiCreate
     * @summary Create configuration (only for authorized users)
     * @request POST:/api/ConfigurationApi/Create
     */
    configurationApiCreate: (
      model: PortalModuleConfigurationModelsApiConfigurationConfigurationParameterCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalModuleConfigurationModelsApiConfigurationConfigurationParameterModel,
        void
      >({
        path: `/api/ConfigurationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Configuration
     * @name ConfigurationApiUpdate
     * @summary Update configuration (only for authorized users)
     * @request PUT:/api/ConfigurationApi/Update
     */
    configurationApiUpdate: (
      model: PortalModuleConfigurationModelsApiConfigurationConfigurationParameterUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalModuleConfigurationModelsApiConfigurationConfigurationParameterModel,
        void
      >({
        path: `/api/ConfigurationApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Configuration
     * @name ConfigurationApiDelete
     * @summary Delete specified configuration (only for authorized users)
     * @request DELETE:/api/ConfigurationApi/Delete
     */
    configurationApiDelete: (
      model: PortalModuleConfigurationModelsApiConfigurationConfigurationParameterDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ConfigurationApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CountryApiGet
     * @summary Gets the list of all countries
     * @request GET:/api/CountryApi/Get
     */
    countryApiGet: (params: RequestParams = {}) =>
      this.request<FinanceConfigurationModelsApiCountryModel[], void>({
        path: `/api/CountryApi/Get`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Delayed finance operation and chain creation
     *
     * @tags Crypto
     * @name CryptoAddressApiCreate
     * @summary Request a crypto address for deposit (only for authorized users)
     * @request POST:/api/CryptoAddressApi/Create
     */
    cryptoAddressApiCreate: (
      model: PortalPsCryptoModelsApiCryptoAddressCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCryptoModelsApiCryptoAddressModel, void>({
        path: `/api/CryptoAddressApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiCreateAddress
     * @summary Create crypto address (only for authorized users)
     * @request GET:/api/CryptoApi/CreateAddress
     * @deprecated
     */
    cryptoApiCreateAddress: (
      query: {
        paymentType: string
        paymentOption?: string
        paymentRoute?: string
        recreate?: boolean
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCryptoModelsApiCryptoAddressResponseModel, void>({
        path: `/api/CryptoApi/CreateAddress`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiTokens
     * @summary Get crypto tokens available for payment (only for authorized users)
     * @request GET:/api/CryptoApi/Tokens
     */
    cryptoApiTokens: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        currencyCode?: string
        cryptoTokenStandardCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsCryptoModelsApiCryptoTokenModel[], void>({
        path: `/api/CryptoApi/Tokens`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Creates the finance operation and chain immediately (the chain ID will be attached to the response)
     *
     * @tags Crypto
     * @name CryptoApiAdd
     * @summary Crypto deposit (only for authorized users)
     * @request POST:/api/CryptoApi/Add
     */
    cryptoApiAdd: (model: PortalPsCryptoModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsCryptoModelsApiDepositModel, void>({
        path: `/api/CryptoApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiNotice
     * @summary Notice about adding funds via cryptocurrency (only for authorized users)
     * @request POST:/api/CryptoApi/Notice
     */
    cryptoApiNotice: (model: PortalPsCryptoModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/CryptoApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Crypto
     * @name CryptoApiWithdraw
     * @summary Crypto withdrawal (only for authorized users)
     * @request POST:/api/CryptoApi/Withdraw
     */
    cryptoApiWithdraw: (model: PortalPsCryptoModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/CryptoApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiProvinces
     * @summary Get provinces list (only for authorized users)
     * @request GET:/api/DCPayApi/Provinces
     */
    dcPayApiProvinces: (
      query?: { 'request.paymentOptionCode'?: string; 'request.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDcpayModelsApiProvinceModel[], void>({
        path: `/api/DCPayApi/Provinces`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiCities
     * @summary Get cities list (only for authorized users)
     * @request GET:/api/DCPayApi/Cities
     */
    dcPayApiCities: (
      query?: {
        'request.paymentOptionCode'?: string
        'request.bankProvinceCode'?: string
        'request.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDcpayModelsApiCityModel[], void>({
        path: `/api/DCPayApi/Cities`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/DCPayApi/Banks
     */
    dcPayApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsDcpayModelsApiBankModel[], void>({
        path: `/api/DCPayApi/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiAdd
     * @summary Add funds via DCPay (only for authorized users)
     * @request POST:/api/DCPayApi/Add
     */
    dcPayApiAdd: (model: PortalPsDcpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDcpayModelsApiDepositModel, void>({
        path: `/api/DCPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DCPay
     * @name DcPayApiWithdraw
     * @summary Withdraw funds via DCPay (only for authorized users)
     * @request POST:/api/DCPayApi/Withdraw
     */
    dcPayApiWithdraw: (model: PortalPsDcpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DCPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaApiAdd
     * @summary DECTA Gate (only for authorized users)
     * @request POST:/api/DectaApi/Add
     */
    dectaApiAdd: (model: PortalPsDectaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDectaModelsApiDepositModel, void>({
        path: `/api/DectaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaCardApiLoad
     * @summary Transfer funds from ewallet to Decta card (only for authorized users)
     * @request POST:/api/DectaCardApi/Load
     */
    dectaCardApiLoad: (model: PortalPsDectaModelsApiCardLoadModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DectaCardApi/Load`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Decta
     * @name DectaCardApiUnload
     * @summary Transfer funds from Decta card to ewallet (only for authorized users)
     * @request POST:/api/DectaCardApi/Unload
     */
    dectaCardApiUnload: (
      model: PortalPsDectaModelsApiCardUnloadModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DectaCardApi/Unload`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DeltaPay
     * @name DeltaPayApiAdd
     * @summary Add funds via DeltaPay (only for authorized users)
     * @request POST:/api/DeltaPayApi/Add
     */
    deltaPayApiAdd: (model: PortalPsDeltapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDeltapayModelsApiDepositModel, void>({
        path: `/api/DeltaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DengiOnline
     * @name DengiOnlineAdd
     * @summary Add funds via DengiOnline (only for authorized users)
     * @request POST:/api/DengiOnline/Add
     */
    dengiOnlineAdd: (
      model: PortalPsDengionlineModelsApiDengiOnlineAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsDengionlineModelsApiDepositModel, void>({
        path: `/api/DengiOnline/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DengiOnline
     * @name DengiOnlineNotice
     * @summary Notice about adding funds via DengiOnline (only for authorized users)
     * @request POST:/api/DengiOnline/Notice
     */
    dengiOnlineNotice: (
      model: PortalPsDengionlineModelsApiDengiOnlineNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DengiOnline/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/DinpayApi/Banks
     */
    dinpayApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsDinpayModelsApiBankModel[], void>({
        path: `/api/DinpayApi/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiAdd
     * @summary Add funds via Dinpay (only for authorized users)
     * @request POST:/api/DinpayApi/Add
     */
    dinpayApiAdd: (model: PortalPsDinpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDinpayModelsApiDepositModel, void>({
        path: `/api/DinpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiNotice
     * @summary Notice about adding funds via Dinpay (only for authorized users)
     * @request POST:/api/DinpayApi/Notice
     */
    dinpayApiNotice: (model: PortalPsDinpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/DinpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dinpay
     * @name DinpayApiWithdraw
     * @summary Withdraw funds via Dinpay (only for authorized users)
     * @request POST:/api/DinpayApi/Withdraw
     */
    dinpayApiWithdraw: (model: PortalPsDinpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DinpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiAdd
     * @summary Add funds via DixiPay (only for authorized users)
     * @request POST:/api/DixiPayApi/Add
     */
    dixiPayApiAdd: (model: PortalPsDixipayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDixipayModelsApiDepositModel, void>({
        path: `/api/DixiPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiNotice
     * @summary Notice about adding funds via DixiPay (only for authorized users)
     * @request POST:/api/DixiPayApi/Notice
     */
    dixiPayApiNotice: (model: PortalPsDixipayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/DixiPayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags DixiPay
     * @name DixiPayApiWithdraw
     * @summary Withdraw funds via DixiPay (only for authorized users)
     * @request POST:/api/DixiPayApi/Withdraw
     */
    dixiPayApiWithdraw: (
      model: PortalPsDixipayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DixiPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name IbanStructureApiIbanStructureCountriesCollection
     * @summary Iban structure countries collection (only for authorized users)
     * @request GET:/api/IbanStructureApi/IbanStructureCountriesCollection
     */
    ibanStructureApiIbanStructureCountriesCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiRegionCountryModel[], void>({
        path: `/api/IbanStructureApi/IbanStructureCountriesCollection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name IbanStructureApiCollection
     * @summary Iban structure collection (only for authorized users)
     * @request GET:/api/IbanStructureApi/Collection
     */
    ibanStructureApiCollection: (
      query?: { countryCode?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiIbanStructureIbanStructureModel[], void>({
        path: `/api/IbanStructureApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name IbanStructureApiCreate
     * @summary Create iban structure (only for authorized users)
     * @request POST:/api/IbanStructureApi/Create
     */
    ibanStructureApiCreate: (
      model: PortalModuleConfigurationModelsApiIbanStructureIbanStructureCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiIbanStructureIbanStructureModel, void>({
        path: `/api/IbanStructureApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name IbanStructureApiUpdate
     * @summary Update iban structure (only for authorized users)
     * @request PUT:/api/IbanStructureApi/Update
     */
    ibanStructureApiUpdate: (
      model: PortalModuleConfigurationModelsApiIbanStructureIbanStructureUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiIbanStructureIbanStructureModel, void>({
        path: `/api/IbanStructureApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name ThemeApiCollection
     * @summary Themes collection (only for authorized users)
     * @request GET:/api/ThemeApi/Collection
     */
    themeApiCollection: (query?: { instanceName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiThemeThemeModel[], void>({
        path: `/api/ThemeApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name ThemeApiCreate
     * @summary Create theme (only for authorized users)
     * @request POST:/api/ThemeApi/Create
     */
    themeApiCreate: (
      model: PortalModuleConfigurationModelsApiThemeThemeCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiThemeThemeModel, void>({
        path: `/api/ThemeApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name ThemeApiUpdate
     * @summary Update theme (only for authorized users)
     * @request PUT:/api/ThemeApi/Update
     */
    themeApiUpdate: (
      model: PortalModuleConfigurationModelsApiThemeThemeUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiThemeThemeModel, void>({
        path: `/api/ThemeApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR role
     *
     * @tags Domain
     * @name ThemeApiDelete
     * @summary Delete specified theme (only for authorized users)
     * @request DELETE:/api/ThemeApi/Delete
     */
    themeApiDelete: (
      model: PortalModuleConfigurationModelsApiThemeThemeDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ThemeApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainApiCollection
     * @summary Get domains that currently exist on client's instance and their settings (only for authorized users)
     * @request GET:/api/DomainApi/Collection
     */
    domainApiCollection: (query?: { instanceName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel[], void>({
        path: `/api/DomainApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainApiCreate
     * @summary Create a new domain (only for authorized users)
     * @request POST:/api/DomainApi/Create
     */
    domainApiCreate: (
      model: PortalModuleConfigurationModelsApiDomainDomainCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel, void>({
        path: `/api/DomainApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Domain
     * @name DomainApiUpdate
     * @summary Update an existing domain (only for authorized users)
     * @request POST:/api/DomainApi/Update
     */
    domainApiUpdate: (
      model: PortalModuleConfigurationModelsApiDomainDomainUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiDomainDomainModel, void>({
        path: `/api/DomainApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Primary domains cannot be deleted
     *
     * @tags Domain
     * @name DomainApiDelete
     * @summary Delete an existing domain (only for authorized users)
     * @request POST:/api/DomainApi/Delete
     */
    domainApiDelete: (
      model: PortalModuleConfigurationModelsApiDomainDomainDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/DomainApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Download
     * @name DownloadApiGetObject
     * @summary Get file by name
     * @request GET:/api/DownloadApi/GetObject
     */
    downloadApiGetObject: (
      query?: { name?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiDownloadFileModel, void>({
        path: `/api/DownloadApi/GetObject`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles
     *
     * @tags Download
     * @name DownloadApiCollection
     * @summary Collection (only for authorized users)
     * @request GET:/api/DownloadApi/Collection
     */
    downloadApiCollection: (query?: { instanceName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleUtilsModelsApiDownloadDownloadModel[], void>({
        path: `/api/DownloadApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles<br /> Content-Type: multipart/form-data
     *
     * @tags Download
     * @name DownloadApiCreate
     * @summary Create download (only for authorized users)
     * @request POST:/api/DownloadApi/Create
     */
    downloadApiCreate: (
      query?: { name?: string; comment?: string; roles?: any[]; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiDownloadDownloadModel, void>({
        path: `/api/DownloadApi/Create`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles<br /> Content-Type: multipart/form-data
     *
     * @tags Download
     * @name DownloadApiUpdate
     * @summary Update download (only for authorized users)
     * @request POST:/api/DownloadApi/Update
     */
    downloadApiUpdate: (
      query?: {
        id?: string
        name?: string
        comment?: string
        roles?: any[]
        instanceName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DownloadApi/Update`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and CONTENT_WRITER roles
     *
     * @tags Download
     * @name DownloadApiDelete
     * @summary Delete download (only for authorized users)
     * @request POST:/api/DownloadApi/Delete
     */
    downloadApiDelete: (
      model: PortalModuleUtilsModelsApiDownloadDeleteDownloadModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DownloadApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiLink
     * @summary Link Dukascopy account (only for authorized users)
     * @request POST:/api/DukascopyApi/Link
     */
    dukascopyApiLink: (model: PortalPsDukascopyModelsApiLinkModel, params: RequestParams = {}) =>
      this.request<PortalPsDukascopyModelsApiRedirectModel, void>({
        path: `/api/DukascopyApi/Link`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiAdd
     * @summary Add funds via Dukascopy (only for authorized users)
     * @request POST:/api/DukascopyApi/Add
     */
    dukascopyApiAdd: (model: PortalPsDukascopyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsDukascopyModelsApiDepositModel, void>({
        path: `/api/DukascopyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiWithdraw
     * @summary Withdraw funds via Dukascopy (only for authorized users)
     * @request POST:/api/DukascopyApi/Withdraw
     */
    dukascopyApiWithdraw: (
      model: PortalPsDukascopyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/DukascopyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dukascopy
     * @name DukascopyApiNotice
     * @summary Notice about adding funds via Dukascopy (only for authorized users)
     * @request POST:/api/DukascopyApi/Notice
     */
    dukascopyApiNotice: (
      model: PortalPsDukascopyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DukascopyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiAdd
     * @summary Add funds via Ecommpay (only for authorized users)
     * @request POST:/api/EcommpayApi/Add
     */
    ecommpayApiAdd: (model: PortalPsEcommpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEcommpayModelsApiDepositModel, void>({
        path: `/api/EcommpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiNotice
     * @summary Notice about adding funds via Ecommpay (only for authorized users)
     * @request POST:/api/EcommpayApi/Notice
     */
    ecommpayApiNotice: (model: PortalPsEcommpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/EcommpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ecommpay
     * @name EcommpayApiWithdraw
     * @summary Withdraw funds via Ecommpay (only for authorized users)
     * @request POST:/api/EcommpayApi/Withdraw
     */
    ecommpayApiWithdraw: (
      model: PortalPsEcommpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/EcommpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiAdd
     * @summary Add funds via Epay (only for authorized users)
     * @request POST:/api/EpayApi/Add
     */
    epayApiAdd: (model: PortalPsEpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEpayModelsApiDepositModel, void>({
        path: `/api/EpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiNotice
     * @summary Notice about adding funds via Epay (only for authorized users)
     * @request POST:/api/EpayApi/Notice
     */
    epayApiNotice: (model: PortalPsEpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/EpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Epay
     * @name EpayApiWithdraw
     * @summary Withdraw funds via Epay (only for authorized users)
     * @request POST:/api/EpayApi/Withdraw
     */
    epayApiWithdraw: (model: PortalPsEpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/EpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiCardWithdraw
     * @summary Withdraw funds by card via Epayments (only for authorized users)
     * @request POST:/api/ePaymentsApi/Card/Withdraw
     */
    epaymentsApiCardWithdraw: (
      model: PortalPsEpaymentsModelsApiCardWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/ePaymentsApi/Card/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiAdd
     * @summary Add funds via Epayments (only for authorized users)
     * @request POST:/api/EpaymentsApi/Add
     */
    epaymentsApiAdd: (model: PortalPsEpaymentsModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsEpaymentsModelsApiDepositModel, void>({
        path: `/api/EpaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiNotice
     * @summary Notice about adding funds via Epayments (only for authorized users)
     * @request POST:/api/EpaymentsApi/Notice
     */
    epaymentsApiNotice: (
      model: PortalPsEpaymentsModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/EpaymentsApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiWithdraw
     * @summary Withdraw funds via Epayments (only for authorized users)
     * @request POST:/api/EpaymentsApi/Withdraw
     */
    epaymentsApiWithdraw: (
      model: PortalPsEpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/EpaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description After user follows ePayments authorization endpoint url and logs in to ePayments site, we'll catch authorization code redirect, request additional data about user's ePayments account and save it
     *
     * @tags ePayments
     * @name EpaymentsApiLinkUser
     * @summary Link ePayments user with current user (only for authorized users)
     * @request POST:/api/EpaymentsApi/LinkUser
     */
    epaymentsApiLinkUser: (
      model: PortalPsEpaymentsModelsApiLinkUserModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEpaymentsModelsApiLinkUserResultModel, void>({
        path: `/api/EpaymentsApi/LinkUser`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ePayments
     * @name EpaymentsApiLinkCard
     * @summary Link existing ePayments card (only for authorized users)
     * @request POST:/api/EpaymentsApi/LinkCard
     */
    epaymentsApiLinkCard: (
      model: PortalPsEpaymentsModelsApiLinkCardModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEpaymentsModelsApiLinkCardResultModel, void>({
        path: `/api/EpaymentsApi/LinkCard`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Erip
     * @name EripApiPaymentInfo
     * @summary Get payment info for deposit via ERIP (only for authorized users)
     * @request POST:/api/EripApi/PaymentInfo
     */
    eripApiPaymentInfo: (
      model: PortalPsEripModelsApiPaymentInfoRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsEripModelsApiPaymentInfoModel, void>({
        path: `/api/EripApi/PaymentInfo`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Erip
     * @name EripApiNotice
     * @summary Notice about adding funds via ERIP (only for authorized users)
     * @request POST:/api/EripApi/Notice
     */
    eripApiNotice: (model: PortalPsEripModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/EripApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags eShop
     * @name DeliveryApiConfiguration
     * @summary Get configurations list (only for authorized users)
     * @request GET:/api/DeliveryApi/Configuration
     */
    deliveryApiConfiguration: (
      query?: {
        country?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEshopModelsApiDeliveryConfigurationModel[], void>({
        path: `/api/DeliveryApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name CurrencyRateApiCurrencyRate
     * @summary Gets specific currency rate (only for authorized users)
     * @request GET:/api/CurrencyRateApi/CurrencyRate
     */
    currencyRateApiCurrencyRate: (
      query?: {
        currencyCodeFrom?: string
        currencyCodeTo?: string
        isForward?: boolean
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConversionModelsCurrencyRateInfoModel, any>({
        path: `/api/CurrencyRateApi/CurrencyRate`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Shows the list of currency rates for the selected symbol.
     *
     * @tags Exchange
     * @name CurrencyRateApiCollection
     * @summary Currency rates (only for authorized users)
     * @request GET:/api/CurrencyRateApi/Collection
     */
    currencyRateApiCollection: (
      query: { symbol: string; dateFrom: string; dateTo: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConversionModelsCurrencyRateCollectionResponseModel, void>({
        path: `/api/CurrencyRateApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create currency rate manually
     *
     * @tags Exchange
     * @name CurrencyRateApiCreate
     * @summary Manual create currency rate (only for authorized users)
     * @request POST:/api/CurrencyRateApi/Create
     */
    currencyRateApiCreate: (
      model: FinanceConversionModelsCurrencyRateRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/CurrencyRateApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Extended info
     *
     * @tags Exchange
     * @name SymbolApiGetCollection
     * @summary Symbols (only for authorized users)
     * @request GET:/api/SymbolApi/GetCollection
     */
    symbolApiGetCollection: (params: RequestParams = {}) =>
      this.request<
        FinanceConversionModelsSymbolResponseModel1AtCoreModelsCurrencyModelAtCoreVersion1000CultureNeutralPublicKeyTokenNull[],
        void
      >({
        path: `/api/SymbolApi/GetCollection`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name SymbolApiCollection
     * @summary Symbols (only for authorized users)
     * @request GET:/api/SymbolApi/Collection
     */
    symbolApiCollection: (params: RequestParams = {}) =>
      this.request<
        FinanceConversionModelsSymbolResponseModel1SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/SymbolApi/Collection`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the latest foreign exchange rates.
     *
     * @tags Exchange
     * @name UtilsApiCurrencyRates
     * @summary Latest Currency rate info (only for authorized users)
     * @request POST:/api/UtilsApi/CurrencyRates
     */
    utilsApiCurrencyRates: (
      query?: { date?: string; currencyFrom?: string; currencyTo?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleUtilsModelsApiCurrencyRateHistoryResponseModel, void>({
        path: `/api/UtilsApi/CurrencyRates`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Conversion operation of different currency types.
     *
     * @tags Exchange
     * @name UtilsApiExchange
     * @summary OBSOLETE!!! Use POST api/UtilsApi/Exchange instead (only for authorized users)
     * @request GET:/api/UtilsApi/Exchange
     * @deprecated
     */
    utilsApiExchange: (
      query?: { from?: string; to?: string; amount?: number; pinCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UtilsApi/Exchange`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Exchange
     * @name UtilsApiExchange2
     * @summary Currency exchange (only for authorized users)
     * @request POST:/api/UtilsApi/Exchange
     * @originalName utilsApiExchange
     * @duplicate
     */
    utilsApiExchange2: (
      model: PortalModuleUtilsModelsApiCurrencyExchangeCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UtilsApi/Exchange`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiAdd
     * @summary Add funds via FasaPay (only for authorized users)
     * @request POST:/api/FasaPayApi/Add
     */
    fasaPayApiAdd: (model: PortalPsFasapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsFasapayModelsApiDepositModel, void>({
        path: `/api/FasaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiNotice
     * @summary Notice about adding funds via FasaPay (only for authorized users)
     * @request POST:/api/FasaPayApi/Notice
     */
    fasaPayApiNotice: (model: PortalPsFasapayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/FasaPayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FasaPay
     * @name FasaPayApiWithdraw
     * @summary Withdraw funds via FasaPay (only for authorized users)
     * @request POST:/api/FasaPayApi/Withdraw
     */
    fasaPayApiWithdraw: (
      model: PortalPsFasapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/FasaPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Fees
     * @name FeeConfigurationApiGet
     * @summary Fee configuration collection (only for authorized users)
     * @request GET:/api/FeeConfigurationApi/Get
     */
    feeConfigurationApiGet: (
      query?: { domainName?: string; paymentTypeCode?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationModel[], void>({
        path: `/api/FeeConfigurationApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Fees
     * @name FeeConfigurationApiCreate
     * @summary Create fee configuration (only for authorized users)
     * @request POST:/api/FeeConfigurationApi/Create
     */
    feeConfigurationApiCreate: (
      model: FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationModel[], void>({
        path: `/api/FeeConfigurationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Fees
     * @name FeeConfigurationApiUpdate
     * @summary Update fee configuration (only for authorized users)
     * @request PUT:/api/FeeConfigurationApi/Update
     */
    feeConfigurationApiUpdate: (
      model: FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationModel, void>({
        path: `/api/FeeConfigurationApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Fees
     * @name FeeConfigurationApiDelete
     * @summary Delete specified fee configuration (only for authorized users)
     * @request DELETE:/api/FeeConfigurationApi/Delete
     */
    feeConfigurationApiDelete: (
      model: FinanceConfigurationModelsApiFeeConfigurationFeeConfigurationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/FeeConfigurationApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FocalPayments
     * @name FocalPaymentsApiAdd
     * @summary Add funds via FocalPayments (only for authorized users)
     * @request POST:/api/FocalPaymentsApi/Add
     */
    focalPaymentsApiAdd: (
      model: PortalPsFocalpaymentsModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsFocalpaymentsModelsApiDepositModel, void>({
        path: `/api/FocalPaymentsApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FocalPayments
     * @name FocalPaymentsApiWithdraw
     * @summary Withdraw funds via FocalPayments (only for authorized users)
     * @request POST:/api/FocalPaymentsApi/Withdraw
     */
    focalPaymentsApiWithdraw: (
      model: PortalPsFocalpaymentsModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/FocalPaymentsApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description This method redirects client to the requested payment form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiPayment
     * @summary Payment gateway
     * @request GET:/api/GatewayApi/Payment
     */
    gatewayApiPayment: (
      query?: {
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        financeOperationType?: string
        currencyCode?: string
        inPaymentType?: string
        inPaymentOption?: string
        inPaymentRoute?: string
        inCurrency?: string
        outPaymentType?: string
        outPaymentOption?: string
        outPaymentRoute?: string
        outCurrency?: string
        paymentTypeAccount?: string
        amount?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Payment`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description This method redirects client to the requested trading account opening form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiAddTradingAccount
     * @summary Add trading account
     * @request GET:/api/GatewayApi/AddTradingAccount
     */
    gatewayApiAddTradingAccount: (
      query?: {
        tradingProduct?: string
        currencyCode?: string
        leverage?: number
        amount?: number
        agent?: string
        promotion?: string
        competitionCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/AddTradingAccount`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description This method redirects client to the verification form. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiVerification
     * @summary Verification gateway
     * @request GET:/api/GatewayApi/Verification
     */
    gatewayApiVerification: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Verification`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description This method redirects client to the statement download page. When called with valid Authorization header, appends gateway authorization cookie to the response.
     *
     * @tags Gateway
     * @name GatewayApiStatement
     * @summary Account statement
     * @request GET:/api/GatewayApi/Statement
     */
    gatewayApiStatement: (
      query?: { accountNumber?: string; dateFrom?: string; dateTo?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/GatewayApi/Statement`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Goal
     * @name GoalTypeApiGoalTypes
     * @summary Get goal types by group name
     * @request GET:/api/GoalTypeApi/GoalTypes
     */
    goalTypeApiGoalTypes: (query: { groupName: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/GoalTypeApi/GoalTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name GoogleAuthenticatorApiActivate
     * @summary Google Authenticator activation settings (only for authorized users)
     * @request GET:/api/GoogleAuthenticatorApi/Activate
     */
    googleAuthenticatorApiActivate: (params: RequestParams = {}) =>
      this.request<PortalUserIdentityGaModelsSettingsModel, void>({
        path: `/api/GoogleAuthenticatorApi/Activate`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiActivate
     * @summary Enable identity of the specified type (only for authorized users)
     * @request POST:/api/IdentityApi/Activate
     */
    identityApiActivate: (
      model: PortalUserIdentityModelsApiActivateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/IdentityApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description In case of Password Identity setup for users without it (e.g. after registration via social network) pass shielded json string "{\"login\": \"string\",\"password\": \"string\"}" in model.Password value. Login must be a unique email or email user has specified after registration.
     *
     * @tags Identity
     * @name IdentityApiUpdate
     * @summary Change password/PIN code/etc. for security reasons (only for authorized users)
     * @request POST:/api/IdentityApi/Update
     */
    identityApiUpdate: (
      model: PortalUserIdentityModelsApiUpdateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/IdentityApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiDeactivate
     * @summary Disable identity of the specified type (only for authorized users)
     * @request POST:/api/IdentityApi/Deactivate
     */
    identityApiDeactivate: (
      model: PortalUserIdentityModelsApiDeactivateIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/IdentityApi/Deactivate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityApiSendCode
     * @summary Send code
     * @request POST:/api/IdentityApi/SendCode
     */
    identityApiSendCode: (
      model: PortalUserIdentityModelsApiSendCodeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiCodeInfoModel, void>({
        path: `/api/IdentityApi/SendCode`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name MultiFactorApiOn
     * @summary Turn on client factor (only for authorized users)
     * @request POST:/api/MultiFactorApi/On
     */
    multiFactorApiOn: (
      model: PortalUserIdentityModelsApiTurnOnClientFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/MultiFactorApi/On`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name MultiFactorApiOff
     * @summary Turn off client factor (only for authorized users)
     * @request POST:/api/MultiFactorApi/Off
     */
    multiFactorApiOff: (
      model: PortalUserIdentityModelsApiTurnOffClientFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/MultiFactorApi/Off`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name PhoneApiOperatorCall
     * @summary Operator call (only for authorized users)
     * @request POST:/api/PhoneApi/OperatorCall
     */
    phoneApiOperatorCall: (
      model: PortalUserIdentitySmsModelsApiOperatorCallModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PhoneApi/OperatorCall`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name PhoneApiVerify
     * @summary Verify (only for authorized users)
     * @request POST:/api/PhoneApi/Verify
     */
    phoneApiVerify: (
      model: PortalUserIdentitySmsModelsApiVerifyModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PhoneApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name BackupCodeApiGet
     * @summary View active backup codes (only for authorized users)
     * @request GET:/api/BackupCodeApi/Get
     */
    backupCodeApiGet: (
      query?: { state?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiBackupCodesModel, void>({
        path: `/api/BackupCodeApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name BackupCodeApiRegenerate
     * @summary Regenerate current backup codes (only for authorized users)
     * @request POST:/api/BackupCodeApi/Regenerate
     */
    backupCodeApiRegenerate: (
      model: PortalUserIdentityModelsApiRegenerateBackupCodesModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiBackupCodesModel, void>({
        path: `/api/BackupCodeApi/Regenerate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name EmailApiVerify
     * @summary Email verification (only for authorized users)
     * @request POST:/api/EmailApi/Verify
     */
    emailApiVerify: (
      model: PortalUserIdentityEmailModelsApiEmailVerificationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/EmailApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name IdentityTypeApiConfiguration
     * @summary Get identity type configurations (only for authorized users)
     * @request GET:/api/IdentityTypeApi/Configuration
     */
    identityTypeApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserIdentityConfigurationModelsApiIdentityTypeConfigurationModel[], void>({
        path: `/api/IdentityTypeApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Verification code for /api/MultiFactorApi/Verify is encrypted with public key returned by current method. Message format - {creation_datetime_in_ticks}:{identityKeyName}. See also: https://www.datetimetoticks-converter.com.
     *
     * @tags Identity
     * @name GenericIdentityApiCreate
     * @summary Create generic identity with specified identity key (only for authorized users)
     * @request POST:/api/GenericIdentityApi/Create
     */
    genericIdentityApiCreate: (
      model: PortalUserIdentityModelsApiCreateGenericIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiGenericIdentityCertificateModel, void>({
        path: `/api/GenericIdentityApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name GenericIdentityApiDeactivate
     * @summary Disable generic identity of the specified identity key (only for authorized users)
     * @request POST:/api/GenericIdentityApi/Deactivate
     */
    genericIdentityApiDeactivate: (
      model: PortalUserIdentityModelsApiDeactivateGenericIdentityModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/GenericIdentityApi/Deactivate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/InpayApi/Banks
     */
    inpayApiBanks: (
      query?: { countryCode?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsInpayModelsApiBankModel[], void>({
        path: `/api/InpayApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiCurrencies
     * @summary Get currencies list (only for authorized users)
     * @request GET:/api/InpayApi/Currencies
     */
    inpayApiCurrencies: (params: RequestParams = {}) =>
      this.request<AtCoreModelsCurrencyModel[], void>({
        path: `/api/InpayApi/Currencies`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiAdd
     * @summary Add funds via Inpay (only for authorized users)
     * @request POST:/api/InpayApi/Add
     */
    inpayApiAdd: (model: PortalPsInpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsInpayModelsApiDepositModel, void>({
        path: `/api/InpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Inpay
     * @name InpayApiWithdraw
     * @summary Withdraw funds via Inpay (only for authorized users)
     * @request POST:/api/InpayApi/Withdraw
     */
    inpayApiWithdraw: (model: PortalPsInpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/InpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags IntellectMoney
     * @name IntellectMoneyApiAdd
     * @summary Add funds via IntellectMoney (only for authorized users)
     * @request POST:/api/IntellectMoneyApi/Add
     */
    intellectMoneyApiAdd: (
      model: PortalPsIntellectmoneyModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntellectmoneyModelsApiDepositModel, void>({
        path: `/api/IntellectMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags IntellectMoney
     * @name IntellectMoneyApiNotice
     * @summary Notice about adding funds via IntellectMoney (only for authorized users)
     * @request POST:/api/IntellectMoneyApi/Notice
     */
    intellectMoneyApiNotice: (
      model: PortalPsIntellectmoneyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/IntellectMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiIdTypes
     * @summary Get Intercash id types
     * @request GET:/api/IntercashApi/IdTypes
     */
    intercashApiIdTypes: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/IdTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiCardTypes
     * @summary Get Intercash card types
     * @request GET:/api/IntercashApi/CardTypes
     */
    intercashApiCardTypes: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/CardTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiPaymentMethods
     * @summary Get Intercash issue card payment methods
     * @request GET:/api/IntercashApi/PaymentMethods
     */
    intercashApiPaymentMethods: (params: RequestParams = {}) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemByteMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        any
      >({
        path: `/api/IntercashApi/PaymentMethods`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiGet
     * @summary Get Intercash user cards (only for authorized users)
     * @request GET:/api/IntercashApi/Get
     */
    intercashApiGet: (
      query?: {
        statuses?: string[]
        isExternal?: boolean
        isActivated?: boolean
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardModel[], any>({
        path: `/api/IntercashApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiDetails
     * @summary Get Intercash card details (only for authorized users)
     * @request GET:/api/IntercashApi/Details
     */
    intercashApiDetails: (
      query?: { intercashCardId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardDetailsResponseModel, any>({
        path: `/api/IntercashApi/Details`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method returns gateway url if payment method equals TopUp or finance operation chain ID if payment method equals eWallet
     *
     * @tags Intercash
     * @name IntercashApiIssue
     * @summary Issue a new card in Intercash (only for authorized users)
     * @request POST:/api/IntercashApi/Issue
     */
    intercashApiIssue: (
      model: PortalPsIntercashModelsApiCardIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardIssueResponseModel, any>({
        path: `/api/IntercashApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method returns currency and pin of activated plastic card or bool result of virtual card activation
     *
     * @tags Intercash
     * @name IntercashApiActivate
     * @summary Activate intercash card (only for authorized users)
     * @request POST:/api/IntercashApi/Activate
     */
    intercashApiActivate: (
      model: PortalPsIntercashModelsApiCardActivationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsIntercashModelsApiCardActivationResponseModel, any>({
        path: `/api/IntercashApi/Activate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiConvertToPlastic
     * @summary Convert intercash card to plastic (only for authorized users)
     * @request POST:/api/IntercashApi/ConvertToPlastic
     */
    intercashApiConvertToPlastic: (
      model: PortalPsIntercashModelsApiCardConvertToPlasticModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/IntercashApi/ConvertToPlastic`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiSuspend
     * @summary Suspend intercash card (only for authorized users)
     * @request POST:/api/IntercashApi/Suspend
     */
    intercashApiSuspend: (
      model: PortalPsIntercashModelsApiCardSuspendModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/IntercashApi/Suspend`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiDelete
     * @summary Delete intercash card (only for authorized users)
     * @request POST:/api/IntercashApi/Delete
     */
    intercashApiDelete: (
      model: PortalPsIntercashModelsApiCardDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/IntercashApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiAdd
     * @summary Add funds from intercash card via Intercash (only for authorized users)
     * @request POST:/api/IntercashApi/Add
     */
    intercashApiAdd: (model: PortalPsIntercashModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/IntercashApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Intercash
     * @name IntercashApiWithdraw
     * @summary Withdraw funds from intercash card via Intercash (only for authorized users)
     * @request POST:/api/IntercashApi/Withdraw
     */
    intercashApiWithdraw: (
      model: PortalPsIntercashModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/IntercashApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives information about Ip addresses that are saved in Black or White lists.
     *
     * @tags Ip Address
     * @name UserInformationApiIpLists
     * @summary Ip access lists information (only for authorized users)
     * @request GET:/api/UserInformationApi/IpLists
     */
    userInformationApiIpLists: (
      query?: { type?: 'Blacklist' | 'Whitelist' },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel[], void>({
        path: `/api/UserInformationApi/IpLists`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ip Address
     * @name UserInformationApiIpList
     * @summary Add an IP address to the Black/White list (only for authorized users)
     * @request PUT:/api/UserInformationApi/IpList
     */
    userInformationApiIpList: (
      model: PortalUserSettingsModelsUserInformationIpAddressAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel, void>({
        path: `/api/UserInformationApi/IpList`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ip Address
     * @name UserInformationApiIpList2
     * @summary Delete Ip adress from Black/White list (only for authorized users)
     * @request DELETE:/api/UserInformationApi/IpList
     * @originalName userInformationApiIpList
     * @duplicate
     */
    userInformationApiIpList2: (
      model: PortalUserSettingsModelsUserInformationIpAddressDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationIpListModel, void>({
        path: `/api/UserInformationApi/IpList`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageApiLanguages
     * @summary Get languages list for domain
     * @request GET:/api/LanguageApi/Languages
     */
    languageApiLanguages: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiLanguageLanguageModel[], void>({
        path: `/api/LanguageApi/Languages`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Language
     * @name LanguageApiUpdatePrefferedLanguage
     * @summary Update preffered language (only for authorized users)
     * @request POST:/api/LanguageApi/UpdatePrefferedLanguage
     */
    languageApiUpdatePrefferedLanguage: (
      model: PortalModuleConfigurationModelsApiLanguagePrefferedLanguageUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/LanguageApi/UpdatePrefferedLanguage`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiAdd
     * @summary Add funds via Lavapay (only for authorized users)
     * @request POST:/api/LavapayApi/Add
     */
    lavapayApiAdd: (model: PortalPsLavapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsLavapayModelsApiDepositModel, void>({
        path: `/api/LavapayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiNotice
     * @summary Notice about adding funds via Lavapay (only for authorized users)
     * @request POST:/api/LavapayApi/Notice
     */
    lavapayApiNotice: (model: PortalPsLavapayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/LavapayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lavapay
     * @name LavapayApiWithdraw
     * @summary Withdraw funds via Lavapay (only for authorized users)
     * @request POST:/api/LavapayApi/Withdraw
     */
    lavapayApiWithdraw: (
      model: PortalPsLavapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/LavapayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiSave
     * @summary Save Lead data
     * @request POST:/api/LeadApi/Save
     */
    leadApiSave: (model: PortalUserLeadModelsJsonLeadDataRequest, params: RequestParams = {}) =>
      this.request<PortalUserLeadModelsJsonLeadDataResponse, void>({
        path: `/api/LeadApi/Save`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiSubmit
     * @summary Submit
     * @request POST:/api/LeadApi/Submit
     */
    leadApiSubmit: (
      form: SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/LeadApi/Submit`,
        method: 'POST',
        body: form,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiGetDetails
     * @summary Get details (only for authorized users)
     * @request GET:/api/LeadApi/GetDetails
     * @deprecated
     */
    leadApiGetDetails: (query: { dateFrom: string; dateTo: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/LeadApi/GetDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Lead
     * @name LeadApiDetails
     * @summary Get details (only for authorized users)
     * @request GET:/api/LeadApi/Details
     */
    leadApiDetails: (query: { dateFrom: string; dateTo: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/LeadApi/Details`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalDeposit
     * @name LocalDepositApiNotice
     * @summary Notice about adding funds via LocalDeposit (only for authorized users)
     * @request POST:/api/LocalDepositApi/Notice
     */
    localDepositApiNotice: (
      model: PortalPsLocaldepositModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/LocalDepositApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalDeposit
     * @name LocalDepositApiWithdraw
     * @summary Withdraw funds via LocalDeposit (only for authorized users)
     * @request POST:/api/LocalDepositApi/Withdraw
     */
    localDepositApiWithdraw: (
      model: PortalPsLocaldepositModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/LocalDepositApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalWithdrawal
     * @name LocalWithdrawalApiBanks
     * @summary List of banks for LocalWithdrawal (only for authorized users)
     * @request GET:/api/LocalWithdrawalApi/Banks
     */
    localWithdrawalApiBanks: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsLocalwithdrawalModelsApiLocalWithdrawalBanksModel, void>({
        path: `/api/LocalWithdrawalApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags LocalWithdrawal
     * @name LocalWithdrawalApiWithdraw
     * @summary Withdraw funds via LocalWithdrawal (only for authorized users)
     * @request POST:/api/LocalWithdrawalApi/Withdraw
     */
    localWithdrawalApiWithdraw: (
      model: PortalPsLocalwithdrawalModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/LocalWithdrawalApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name LoginApiConfiguration
     * @summary Login options
     * @request GET:/api/LoginApi/Configuration
     */
    loginApiConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserLoginModelsApiLoginConfigurationModel[], void>({
        path: `/api/LoginApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name LoginApiAuthorize
     * @summary Authorize
     * @request POST:/api/LoginApi/Authorize
     */
    loginApiAuthorize: (
      model: PortalUserLoginModelsApiAuthorizeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserLoginModelsApiLoginResultModel, void>({
        path: `/api/LoginApi/Authorize`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description By calling this API method client initiates OAuth login procedure which, if successful, will result in a callback to the specified return url with a limited scope access token attached as url parameter. To complete the procedure, client calls POST api/OAuthApi/Login method with the received access token in Authorization header.
     *
     * @tags Login
     * @name OAuthApiLogin
     * @summary Initiate login/registration via OAuth
     * @request GET:/api/OAuthApi/Login
     */
    oAuthApiLogin: (
      query?: {
        identityTypeName?: string
        returnUrl?: string
        state?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/OAuthApi/Login`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Log in or register via external system (social network, instance, etc.) or add external login option to an existing account.
     *
     * @tags Login
     * @name OAuthApiLogin2
     * @summary Complete login/registration via OAuth (only for authorized users)
     * @request POST:/api/OAuthApi/Login
     * @originalName oAuthApiLogin
     * @duplicate
     */
    oAuthApiLogin2: (
      model: PortalModuleAuthApiModelsOAuthLoginCompleteModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserLoginModelsApiLoginResultModel, void>({
        path: `/api/OAuthApi/Login`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiTransfer
     * @summary Transfer funds
     * @request POST:/api/MerchantApi/Transfer
     */
    merchantApiTransfer: (
      model: PortalPsMerchantModelsTransferRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsMerchantApiResponseModel, void>({
        path: `/api/MerchantApi/Transfer`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiWithdraw
     * @summary Create withdrawal
     * @request POST:/api/MerchantApi/Withdraw
     */
    merchantApiWithdraw: (
      model: PortalPsMerchantModelsWithdrawRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsMerchantApiResponseModel, void>({
        path: `/api/MerchantApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiUserDetails
     * @summary Provide user details
     * @request POST:/api/MerchantApi/UserDetails
     */
    merchantApiUserDetails: (
      model: PortalPsMerchantModelsUserDetailsRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsUserDetailsModel, void>({
        path: `/api/MerchantApi/UserDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiPaymentDetails
     * @summary Provide payment details
     * @request POST:/api/MerchantApi/PaymentDetails
     */
    merchantApiPaymentDetails: (
      model: PortalPsMerchantModelsPaymentDetailsRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMerchantModelsPaymentDetailsModel, void>({
        path: `/api/MerchantApi/PaymentDetails`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Merchant
     * @name MerchantApiNotification
     * @summary Receive payment notification
     * @request POST:/api/MerchantApi/Notification
     */
    merchantApiNotification: (
      model: PortalPsMerchantModelsNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/MerchantApi/Notification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Minerva
     * @name MinervaApiLocalWireTransfer
     * @summary LocalWireTransfer via Minerva (only for authorized users)
     * @request POST:/api/MinervaApi/LocalWireTransfer
     */
    minervaApiLocalWireTransfer: (
      model: PortalPsMinervaModelsApiLocalWireTransferModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMinervaModelsApiDepositModel, void>({
        path: `/api/MinervaApi/LocalWireTransfer`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Minerva
     * @name MinervaApiWithdraw
     * @summary Withdraw funds via Minerva (only for authorized users)
     * @request POST:/api/MinervaApi/Withdraw
     */
    minervaApiWithdraw: (
      model: PortalPsMinervaModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/MinervaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiAdd
     * @summary Add funds via MisterTango (only for authorized users)
     * @request POST:/api/MisterTangoApi/Add
     */
    misterTangoApiAdd: (model: PortalPsMistertangoModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsMistertangoModelsApiDepositModel, void>({
        path: `/api/MisterTangoApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiCreditDebitCardsAdd
     * @summary Add funds from credit card via MisterTango (only for authorized users)
     * @request POST:/api/MisterTangoApi/CreditDebitCardsAdd
     */
    misterTangoApiCreditDebitCardsAdd: (
      model: PortalPsMistertangoModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMistertangoModelsApiDepositModel, void>({
        path: `/api/MisterTangoApi/CreditDebitCardsAdd`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiNotice
     * @summary Notice about adding funds via MisterTango (only for authorized users)
     * @request POST:/api/MisterTangoApi/Notice
     */
    misterTangoApiNotice: (
      model: PortalPsMistertangoModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/MisterTangoApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MisterTango
     * @name MisterTangoApiWithdraw
     * @summary Withdraw funds via MisterTango (only for authorized users)
     * @request POST:/api/MisterTangoApi/Withdraw
     */
    misterTangoApiWithdraw: (
      model: PortalPsMistertangoModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/MisterTangoApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiAddBy
     * @summary Add funds via Moneybookers with payment option (only for authorized users)
     * @request POST:/api/MoneybookersApi/ElectronicPayments/Add
     */
    moneybookersApiAddBy: (
      model: PortalPsMoneybookersModelsApiRequestAddByPaymentOptionModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, void>({
        path: `/api/MoneybookersApi/ElectronicPayments/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiCreditDebitCardsAdd
     * @summary Add funds via Moneybookers with credit/debit cards (only for authorized users)
     * @request POST:/api/MoneybookersApi/CreditDebitCards/Add
     */
    moneybookersApiCreditDebitCardsAdd: (
      model: PortalPsMoneybookersModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, void>({
        path: `/api/MoneybookersApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiLocalWireTransferAdd
     * @summary Add funds via Moneybookers with local wire transfer (only for authorized users)
     * @request POST:/api/MoneybookersApi/LocalWireTransfer/Add
     */
    moneybookersApiLocalWireTransferAdd: (
      model: PortalPsMoneybookersModelsApiLocalWireTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, void>({
        path: `/api/MoneybookersApi/LocalWireTransfer/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiAdd
     * @summary Add funds via Moneybookers (only for authorized users)
     * @request POST:/api/MoneybookersApi/Add
     */
    moneybookersApiAdd: (
      model: PortalPsMoneybookersModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsMoneybookersModelsApiDepositModel, void>({
        path: `/api/MoneybookersApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiWithdraw
     * @summary Withdraw funds via Moneybookers (only for authorized users)
     * @request POST:/api/MoneybookersApi/Withdraw
     */
    moneybookersApiWithdraw: (
      model: PortalPsMoneybookersModelsApiRequestWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/MoneybookersApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Moneybookers
     * @name MoneybookersApiNotice
     * @summary Notice about adding funds via Moneybookers (only for authorized users)
     * @request POST:/api/MoneybookersApi/Notice
     */
    moneybookersApiNotice: (
      model: PortalPsMoneybookersModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/MoneybookersApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MtBank
     * @name MtBankApiAdd
     * @summary Add funds via MtBank (only for authorized users)
     * @request POST:/api/MtBankApi/Add
     */
    mtBankApiAdd: (model: PortalPsMtbankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsMtbankModelsApiDepositModel, void>({
        path: `/api/MtBankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags MtBank
     * @name MtBankApiWithdraw
     * @summary Withdraw funds via MtBank (only for authorized users)
     * @request POST:/api/MtBankApi/Withdraw
     */
    mtBankApiWithdraw: (model: PortalPsMtbankModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/MtBankApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Multi-factor authentication
     * @name MultiFactorApiConfiguration
     * @summary MFA configuration
     * @request GET:/api/MultiFactorApi/Configuration
     */
    multiFactorApiConfiguration: (
      query?: {
        operationCode?:
          | 'BACKUPCODE_ACTIVATION'
          | 'BACKUPCODE_CHANGE'
          | 'BACKUPCODE_DEACTIVATION'
          | 'CLIENT_FACTOR_MANAGEMENT'
          | 'GENERIC_ACTIVATION'
          | 'GENERIC_DEACTIVATION'
          | 'EMAIL_ACTIVATION'
          | 'EMAIL_DEACTIVATION'
          | 'GOOGLEAUTHENTICATOR_ACTIVATION'
          | 'GOOGLEAUTHENTICATOR_DEACTIVATION'
          | 'LOGIN'
          | 'PASSWORD_CHANGE'
          | 'PINCODE_CHANGE'
          | 'SMS_ACTIVATION'
          | 'SMS_DEACTIVATION'
          | 'WITHDRAW'
        financeOperationTypeName?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        merchantCode?: string
        identityFactorCode?: string
        state?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiMultiFactorConfigurationResponseModel, void>({
        path: `/api/MultiFactorApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Multi-factor authentication
     * @name MultiFactorApiVerify
     * @summary Verify authentication factor
     * @request POST:/api/MultiFactorApi/Verify
     */
    multiFactorApiVerify: (
      model: PortalUserIdentityModelsApiVerifyFactorModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserIdentityModelsApiMultiFactorInfoModel, void>({
        path: `/api/MultiFactorApi/Verify`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiAdd
     * @summary Add funds via Nab (only for authorized users)
     * @request POST:/api/NabApi/Add
     */
    nabApiAdd: (model: PortalPsNabModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsNabModelsInvoiceModel, void>({
        path: `/api/NabApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiWithdraw
     * @summary Withdraw funds via Nab (only for authorized users)
     * @request POST:/api/NabApi/Withdraw
     */
    nabApiWithdraw: (model: PortalPsNabModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/NabApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Nab
     * @name NabApiNotice
     * @summary Notice about adding funds via NAb (only for authorized users)
     * @request POST:/api/NabApi/Notice
     */
    nabApiNotice: (model: PortalPsNabModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/NabApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags NCwallet
     * @name NcwalletApiWithdraw
     * @summary Withdraw funds via NCwallet (only for authorized users)
     * @request POST:/api/NcwalletApi/Withdraw
     */
    ncwalletApiWithdraw: (
      model: PortalPsNcwalletModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/NcwalletApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiCreditDebitCardsAdd
     * @summary Add funds from credit/debit cards using Netbanx via Skrill (only for authorized users)
     * @request POST:/api/NetbanxApi/CreditDebitCards/Add
     */
    netbanxApiCreditDebitCardsAdd: (
      model: PortalPsNetbanxModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsNetbanxModelsApiDepositModel, any>({
        path: `/api/NetbanxApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiLocalWireTransferAdd
     * @summary Add funds from credit/debit cards using Netbanx via LocalWireTransfer (only for authorized users)
     * @request POST:/api/NetbanxApi/LocalWireTransfer/Add
     */
    netbanxApiLocalWireTransferAdd: (
      model: PortalPsNetbanxModelsApiLocalWireTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsNetbanxModelsApiDepositModel, any>({
        path: `/api/NetbanxApi/LocalWireTransfer/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Netbanx
     * @name NetbanxApiCreditDebitCardsWithdraw
     * @summary Withdraw funds from credit/debit cards using Netbanx via Skrill (only for authorized users)
     * @request POST:/api/NetbanxApi/CreditDebitCards/Withdraw
     */
    netbanxApiCreditDebitCardsWithdraw: (
      model: PortalPsNetbanxModelsApiCreditDebitCardsWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/NetbanxApi/CreditDebitCards/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiAdd
     * @summary Add funds via Neteller (only for authorized users)
     * @request POST:/api/NetellerApi/Add
     */
    netellerApiAdd: (model: PortalPsNetellerModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsNetellerModelsApiDepositModel, void>({
        path: `/api/NetellerApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiNotice
     * @summary Notice about adding funds via Neteller (only for authorized users)
     * @request POST:/api/NetellerApi/Notice
     */
    netellerApiNotice: (model: PortalPsNetellerModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/NetellerApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Neteller
     * @name NetellerApiWithdraw
     * @summary Withdraw funds via Neteller (only for authorized users)
     * @request POST:/api/NetellerApi/Withdraw
     */
    netellerApiWithdraw: (
      model: PortalPsNetellerModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/NetellerApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiNotificationTypes
     * @summary Set of notification types (only for authorized users)
     * @request GET:/api/NotificationApi/NotificationTypes
     */
    notificationApiNotificationTypes: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationTypeModel[], void>({
        path: `/api/NotificationApi/NotificationTypes`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiContactMethods
     * @summary Set of contact methods (only for authorized users)
     * @request GET:/api/NotificationApi/ContactMethods
     */
    notificationApiContactMethods: (
      query?: { notificationTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationContactMethodModel[], void>({
        path: `/api/NotificationApi/ContactMethods`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiNotificationUserSettings
     * @summary Set of user notification settings (only for authorized users)
     * @request GET:/api/NotificationApi/NotificationUserSettings
     */
    notificationApiNotificationUserSettings: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel[], void>({
        path: `/api/NotificationApi/NotificationUserSettings`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiCreate
     * @summary Create notification setting (only for authorized users)
     * @request POST:/api/NotificationApi/Create
     */
    notificationApiCreate: (
      model: PortalUserSettingsModelsApiNotificationCreateNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel, void>({
        path: `/api/NotificationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Notification
     * @name NotificationApiUpdate
     * @summary Update notification setting (only for authorized users)
     * @request POST:/api/NotificationApi/Update
     */
    notificationApiUpdate: (
      model: PortalUserSettingsModelsApiNotificationUpdateNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiNotificationNotificationSettingModel, void>({
        path: `/api/NotificationApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiAdd
     * @summary Add funds via Okpay (only for authorized users)
     * @request POST:/api/OkpayApi/Add
     */
    okpayApiAdd: (model: PortalPsOkpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsOkpayModelsApiDepositModel, void>({
        path: `/api/OkpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiNotice
     * @summary Notice about adding funds via Okpay (only for authorized users)
     * @request POST:/api/OkpayApi/Notice
     */
    okpayApiNotice: (model: PortalPsOkpayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/OkpayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Okpay
     * @name OkpayApiWithdraw
     * @summary Withdraw funds via Okpay (only for authorized users)
     * @request POST:/api/OkpayApi/Withdraw
     */
    okpayApiWithdraw: (model: PortalPsOkpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/OkpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiPaymentInfo
     * @summary Get payment info for deposit via Oplati (only for authorized users)
     * @request POST:/api/OplatiApi/PaymentInfo
     */
    oplatiApiPaymentInfo: (
      model: PortalPsOplatiModelsApiPaymentInfoRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsOplatiModelsApiPaymentInfoModel, void>({
        path: `/api/OplatiApi/PaymentInfo`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiNotice
     * @summary Notice about adding funds via Oplati (only for authorized users)
     * @request POST:/api/OplatiApi/Notice
     */
    oplatiApiNotice: (model: PortalPsOplatiModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/OplatiApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiWithdraw
     * @summary Withdraw funds via Oplati (only for authorized users)
     * @request POST:/api/OplatiApi/Withdraw
     */
    oplatiApiWithdraw: (model: PortalPsOplatiModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/OplatiApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Oplati
     * @name OplatiApiLastDepositPurseNumber
     * @summary The purse number from which the last deposit was made (only for authorized users)
     * @request GET:/api/OplatiApi/LastDepositPurseNumber
     */
    oplatiApiLastDepositPurseNumber: (params: RequestParams = {}) =>
      this.request<PortalPsOplatiModelsApiPurseModel, void>({
        path: `/api/OplatiApi/LastDepositPurseNumber`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE and FINANCE_MANAGER roles
     *
     * @tags Overdraft
     * @name OverdraftApiCreate
     * @summary Create overdraft configuration (only for authorized users)
     * @request POST:/api/OverdraftApi/Create
     */
    overdraftApiCreate: (
      model: PortalUserSettingsModelsApiOverdraftOverdraftConfigurationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiOverdraftOverdraftDetailsApiModel, void>({
        path: `/api/OverdraftApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE and FINANCE_MANAGER roles
     *
     * @tags Overdraft
     * @name OverdraftApiCollection
     * @summary Overdraft configuration collection (only for authorized users)
     * @request GET:/api/OverdraftApi/Collection
     */
    overdraftApiCollection: (query?: { instanceName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiOverdraftOverdraftDetailsApiModel[], void>({
        path: `/api/OverdraftApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE and FINANCE_MANAGER roles
     *
     * @tags Overdraft
     * @name OverdraftApiUpdate
     * @summary Update overdraft configuration (only for authorized users)
     * @request POST:/api/OverdraftApi/Update
     */
    overdraftApiUpdate: (
      model: PortalUserSettingsModelsApiOverdraftOverdraftConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiOverdraftOverdraftDetailsApiModel, void>({
        path: `/api/OverdraftApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE and FINANCE_MANAGER roles
     *
     * @tags Overdraft
     * @name OverdraftApiDelete
     * @summary Delete overdraft configuration (only for authorized users)
     * @request POST:/api/OverdraftApi/Delete
     */
    overdraftApiDelete: (
      model: PortalUserSettingsModelsApiOverdraftOverdraftConfigurationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/OverdraftApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiCreatePammAccount
     * @summary Create Pamm account
     * @request POST:/api/PammApi/CreatePammAccount
     * @deprecated
     */
    pammApiCreatePammAccount: (
      query: {
        clientLogin: number
        domainAddress: string
        pammLogin: number
        pammAccountTypeName: string
        currencyCode: string
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/PammApi/CreatePammAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiCreateAccount
     * @summary Create PAMM account
     * @request POST:/api/PammApi/CreateAccount
     */
    pammApiCreateAccount: (
      model: PortalExtensionsPammModelsApiCreatePammAccountModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PammApi/CreateAccount`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiJoinPammAccount
     * @summary Join Pamm account
     * @request POST:/api/PammApi/JoinPammAccount
     * @deprecated
     */
    pammApiJoinPammAccount: (
      query: { pammLogin: number; clientLogin: number },
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/PammApi/JoinPammAccount`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiJoinAccount
     * @summary Join to PAMM account
     * @request POST:/api/PammApi/JoinAccount
     */
    pammApiJoinAccount: (
      model: PortalExtensionsPammModelsApiJoinPammAccountModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PammApi/JoinAccount`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiRolloverExecuted
     * @summary Use this method after rollover is executed
     * @request POST:/api/PammApi/RolloverExecuted
     */
    pammApiRolloverExecuted: (
      model: PortalExtensionsPammModelsApiRolloverExecutedModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PammApi/RolloverExecuted`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pamm
     * @name PammApiTransfer
     * @summary Transfer funds
     * @request POST:/api/PammApi/Transfer
     */
    pammApiTransfer: (
      query: {
        accountFrom: string
        accountTo: string
        currency: string
        amount: number
        comment: string
        merchantCode: string
      },
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/PammApi/Transfer`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partnership
     * @name VisitorsStatisticsApiGet
     * @summary Get visitors statistics (only for authorized users)
     * @request GET:/api/VisitorsStatisticsApi/Get
     */
    visitorsStatisticsApiGet: (
      query?: {
        isOpenedAccountsRequired?: boolean
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalModulePartnershipModelsVisitorStatisticsApiVisitorsStatisticsModel, void>({
        path: `/api/VisitorsStatisticsApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Partnership
     * @name ReferralsApiGet
     * @summary Get partnership referrals (only for authorized users)
     * @request GET:/api/ReferralsApi/Get
     */
    referralsApiGet: (
      query?: {
        ownerId?: string
        accountNumber?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalModulePartnershipModelsReferralsApiReferralListingModel[], void>({
        path: `/api/ReferralsApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PastaBank
     * @name PastabankApiDepositConfiguration
     * @summary Pastabank deposit configuration (only for authorized users)
     * @request GET:/api/PastabankApi/Configuration/Add
     */
    pastabankApiDepositConfiguration: (params: RequestParams = {}) =>
      this.request<PortalPsPastabankModelsApiDepositConfigurationModel, void>({
        path: `/api/PastabankApi/Configuration/Add`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PastaBank
     * @name PastabankApiAdd
     * @summary Add funds via Pastabank (only for authorized users)
     * @request POST:/api/PastabankApi/Add
     */
    pastabankApiAdd: (model: PortalPsPastabankModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPastabankModelsApiDepositModel, void>({
        path: `/api/PastabankApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/Paybal51Api/Banks
     */
    paybal51ApiBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaybal51ModelsApiBankModel[], void>({
        path: `/api/Paybal51Api/Banks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiAdd
     * @summary Add funds via Paybal51 (only for authorized users)
     * @request POST:/api/Paybal51Api/Add
     */
    paybal51ApiAdd: (model: PortalPsPaybal51ModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaybal51ModelsApiDepositModel, void>({
        path: `/api/Paybal51Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Paybal51
     * @name Paybal51ApiWithdraw
     * @summary Withdraw funds via Paybal51 (only for authorized users)
     * @request POST:/api/Paybal51Api/Withdraw
     */
    paybal51ApiWithdraw: (
      model: PortalPsPaybal51ModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/Paybal51Api/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payclub
     * @name PayClubApiAdd
     * @summary Add funds via PayClub (only for authorized users)
     * @request POST:/api/PayClubApi/Add
     */
    payClubApiAdd: (model: PortalPsPayclubModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayClubApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiFee
     * @summary List of fees
     * @request GET:/api/FeeApi/Fee
     */
    feeApiFee: (
      query?: {
        balanceOperationTypeName?: string
        currencyCode?: string
        amount?: number
        countryCode?: string
        gatewayPublicKey?: string
        userId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFeeModel[], void>({
        path: `/api/FeeApi/Fee`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method provides full fee settings list including confirmation count for Crypto payments
     *
     * @tags Payment
     * @name FeeApiConfiguration
     * @summary Payment systems
     * @request GET:/api/FeeApi/Configuration
     */
    feeApiConfiguration: (
      query?: {
        countryCode?: string
        domain?: string
        isAggregator?: boolean
        isExternal?: boolean
        balanceOperationType?: string
        paymentCategory?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceTransferModelsApiPaymentConfigurationPaymentConfigurationResponseModel,
        void
      >({
        path: `/api/FeeApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiCollection
     * @summary Get fees collection
     * @request GET:/api/FeeApi/Collection
     */
    feeApiCollection: (
      query?: {
        domain?: string
        country?: string
        balanceOperationType?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        currency?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFeeCollectionModel, void>({
        path: `/api/FeeApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FeeApiFormula
     * @summary Fee formulas info (only for authorized users)
     * @request GET:/api/FeeApi/Formula
     */
    feeApiFormula: (
      query?: {
        balanceOperationTypeName?: string
        amount?: number
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsFeeFormulaModel, void>({
        path: `/api/FeeApi/Formula`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains finance operation statuses.
     *
     * @tags Payment
     * @name OperationApiGetFinanceOperationStatuses
     * @summary Finance operation statuses list (only for authorized users)
     * @request GET:/api/OperationApi/GetFinanceOperationStatuses
     * @deprecated
     */
    operationApiGetFinanceOperationStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiFinanceOperationStatusModel[], void>({
        path: `/api/OperationApi/GetFinanceOperationStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains finance operation statuses.
     *
     * @tags Payment
     * @name OperationApiFinanceOperationStatuses
     * @summary Finance operation statuses list (only for authorized users)
     * @request GET:/api/OperationApi/FinanceOperationStatuses
     */
    operationApiFinanceOperationStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiFinanceOperationStatusModel[], void>({
        path: `/api/OperationApi/FinanceOperationStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains background statuses.
     *
     * @tags Payment
     * @name OperationApiGetBackgroundStatuses
     * @summary Background statuses list (only for authorized users)
     * @request GET:/api/OperationApi/GetBackgroundStatuses
     * @deprecated
     */
    operationApiGetBackgroundStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiBackgroundStatusModel[], void>({
        path: `/api/OperationApi/GetBackgroundStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Contains background statuses.
     *
     * @tags Payment
     * @name OperationApiBackgroundStatuses
     * @summary Background statuses list (only for authorized users)
     * @request GET:/api/OperationApi/BackgroundStatuses
     */
    operationApiBackgroundStatuses: (params: RequestParams = {}) =>
      this.request<FinanceEwalletModelsApiBackgroundStatusModel[], void>({
        path: `/api/OperationApi/BackgroundStatuses`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Displays summary information of account operations.
     *
     * @tags Payment
     * @name OperationApiSummary
     * @summary Account operations info (only for authorized users)
     * @request GET:/api/OperationApi/Summary
     */
    operationApiSummary: (
      query?: {
        account?: string
        currencyCode?: string
        paymentGroupCode?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        balanceOperationType?: string
        financeOperationTypeName?: string
        statuses?: string[]
        chainId?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEwalletModelsApiOperationSummaryResponseModel, void>({
        path: `/api/OperationApi/Summary`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Displays start balances for currencies on acccount.
     *
     * @tags Payment
     * @name OperationApiStartBalances
     * @summary Account operations info (only for authorized users)
     * @request GET:/api/OperationApi/StartBalances
     */
    operationApiStartBalances: (
      query?: {
        account?: string
        paymentType?: string
        paymentOption?: string
        currencies?: string[]
        dateTo?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceEwalletModelsApiStartBalanceResponseModel, void>({
        path: `/api/OperationApi/StartBalances`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceApiBalance
     * @summary Account balance info (only for authorized users)
     * @request GET:/api/FinanceApi/Balance
     */
    financeApiBalance: (
      query?: { account?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsBalanceResponseModel[], void>({
        path: `/api/FinanceApi/Balance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives actual information about amount ranges.
     *
     * @tags Payment
     * @name FinanceApiAmountRange
     * @summary Payment amount range info
     * @request GET:/api/FinanceApi/AmountRange
     */
    financeApiAmountRange: (
      query?: {
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        balanceOperationType?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsAmountRangeResponseModel, void>({
        path: `/api/FinanceApi/AmountRange`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method provides information about currently available payment systems
     *
     * @tags Payment
     * @name FinanceApiPaymentSystems
     * @summary Payment systems (only for authorized users)
     * @request GET:/api/FinanceApi/PaymentSystems
     */
    financeApiPaymentSystems: (
      query?: {
        balanceOperationType?: string
        paymentCategory?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchantCode?: string
        currencyCode?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentSystemPaymentSystemResponseModel, void>({
        path: `/api/FinanceApi/PaymentSystems`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name CurrencyApiCollection
     * @summary Get all currencies (only for authorized users)
     * @request GET:/api/CurrencyApi/Collection
     */
    currencyApiCollection: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<AtCoreModelsCurrencyModel[], void>({
        path: `/api/CurrencyApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceOperationApiAuthorize
     * @summary Authorize payment (only for authorized users)
     * @request POST:/api/FinanceOperationApi/Authorize
     */
    financeOperationApiAuthorize: (
      model: FinanceTransferModelsApiPaymentAuthorizationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/FinanceOperationApi/Authorize`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name FinanceOperationApiCancel
     * @summary Cancel payment (only for authorized users)
     * @request POST:/api/FinanceOperationApi/Cancel
     */
    financeOperationApiCancel: (
      model: FinanceTransferModelsApiPaymentCancellationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/FinanceOperationApi/Cancel`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PocketApiDepositPocket
     * @summary Creates pocket
     * @request POST:/api/PocketApi/DepositPocket
     */
    pocketApiDepositPocket: (
      query?: {
        'model.accountNumber'?: string
        'model.currencyCode'?: string
        'model.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/PocketApi/DepositPocket`,
        method: 'POST',
        query: query,
        ...params,
      }),

    /**
     * @description Payment method selection based on user's previously succeded finance operations in a group
     *
     * @tags Payment
     * @name PaymentWizardApiPaymentMethod
     * @summary Select payment method (only for authorized users)
     * @request GET:/api/PaymentWizardApi/PaymentMethod
     */
    paymentWizardApiPaymentMethod: (
      query?: {
        financeOperationTypeName?: string
        paymentGroupCode?: string
        paymentOptionCode?: string
        merchantCode?: string
        countryCode?: string
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiPaymentConfigurationModel, void>({
        path: `/api/PaymentWizardApi/PaymentMethod`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name LimitApiLimit
     * @summary Get account limits (only for authorized users)
     * @request GET:/api/LimitApi/Limit
     */
    limitApiLimit: (
      query?: {
        balanceOperationTypeName?: string
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        accountNumber?: string
        amount?: number
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiLimitsResponseModel, void>({
        path: `/api/LimitApi/Limit`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiCreate
     * @summary Create user's saved payment account (only for authorized users)
     * @request POST:/api/PaymentTypeAccountApi/Create
     */
    paymentTypeAccountApiCreate: (
      model: FinanceTransferModelsApiPaymentTypeAccountCreateRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PaymentTypeAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiGet
     * @summary Get user's saved payment accounts (only for authorized users)
     * @request GET:/api/PaymentTypeAccountApi/Get
     * @deprecated
     */
    paymentTypeAccountApiGet: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentTypeAccountModel[], void>({
        path: `/api/PaymentTypeAccountApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiCollection
     * @summary Get user's saved payment accounts (only for authorized users)
     * @request GET:/api/PaymentTypeAccountApi/Collection
     */
    paymentTypeAccountApiCollection: (
      query?: {
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPaymentTypeAccountModel[], void>({
        path: `/api/PaymentTypeAccountApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentTypeAccountApiDelete
     * @summary Delete user's saved payment account by name (only for authorized users)
     * @request POST:/api/PaymentTypeAccountApi/Delete
     */
    paymentTypeAccountApiDelete: (
      model: FinanceTransferModelsApiPaymentTypeAccountDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PaymentTypeAccountApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description All parameters are optional. Client may pass any parameter combination to filter out the desired records.
     *
     * @tags Payment
     * @name PaymentConfigurationApiCountries
     * @summary Get countries available for payment (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Countries
     */
    paymentConfigurationApiCountries: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentGroupCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiCountryModel[], void>({
        path: `/api/PaymentConfigurationApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description All parameters are optional. Client may pass any parameter combination to filter out the desired records.
     *
     * @tags Payment
     * @name PaymentConfigurationApiCurrencies
     * @summary Get currencies available for payment (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Currencies
     */
    paymentConfigurationApiCurrencies: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentGroupCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        countryCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<AtCoreModelsCurrencyModel[], void>({
        path: `/api/PaymentConfigurationApi/Currencies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description All parameters are optional. Client may pass any parameter combination to filter out the desired records.
     *
     * @tags Payment
     * @name PaymentConfigurationApiCollection
     * @summary Get available payment methods (only for authorized users)
     * @request GET:/api/PaymentConfigurationApi/Collection
     */
    paymentConfigurationApiCollection: (
      query?: {
        financeOperationTypeName?: string
        merchantCode?: string
        paymentTypeCode?: string
        paymentOptionCode?: string
        paymentRouteCode?: string
        paymentGroupCode?: string
        isAggregator?: boolean
        isExternal?: boolean
        isVisible?: boolean
        countryCode?: string
        currencyCode?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceConfigurationModelsApiPaymentConfigurationModel[], void>({
        path: `/api/PaymentConfigurationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiAdd
     * @summary Add funds via PaymentAsia (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Add
     */
    paymentAsiaApiAdd: (model: PortalPsPaymentasiaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaymentasiaModelsApiDepositModel, void>({
        path: `/api/PaymentAsiaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiNotice
     * @summary Notice about adding funds via PaymentAsia (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Notice
     */
    paymentAsiaApiNotice: (
      model: PortalPsPaymentasiaModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PaymentAsiaApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentAsia
     * @name PaymentAsiaApiWithdraw
     * @summary Withdraw funds via PaymentAsia (only for authorized users)
     * @request POST:/api/PaymentAsiaApi/Withdraw
     */
    paymentAsiaApiWithdraw: (
      model: PortalPsPaymentasiaModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PaymentAsiaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentPriority
     * @name PriorityConfigurationApiPaymentCategories
     * @summary Payment categories collection (only for authorized users)
     * @request GET:/api/PriorityConfigurationApi/PaymentCategories
     */
    priorityConfigurationApiPaymentCategories: (params: RequestParams = {}) =>
      this.request<FinanceConfigurationModelsApiPriorityConfigurationPaymentCategoryModel[], void>({
        path: `/api/PriorityConfigurationApi/PaymentCategories`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags PaymentPriority
     * @name PriorityConfigurationApiGet
     * @summary Priority configuration collection (only for authorized users)
     * @request GET:/api/PriorityConfigurationApi/Get
     */
    priorityConfigurationApiGet: (
      query?: {
        domainName?: string
        paymentOptionCode?: string
        paymentCategoryCode?: string
        balanceOperationTypeName?: string
        languageCode?: string
        instanceName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationModel[],
        void
      >({
        path: `/api/PriorityConfigurationApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles. All configurations returned by api/PriorityConfiguration/Get for specified payment option and payment category must be included in model.Configurations. Unique priority values must be assigned for all configurations.
     *
     * @tags PaymentPriority
     * @name PriorityConfigurationApiUpdate
     * @summary Update payment priority configurations (only for authorized users)
     * @request PUT:/api/PriorityConfigurationApi/Update
     */
    priorityConfigurationApiUpdate: (
      model: FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceConfigurationModelsApiPriorityConfigurationPriorityConfigurationModel[],
        void
      >({
        path: `/api/PriorityConfigurationApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns names of custom fields are required to be filled by user.
     *
     * @tags Payoma
     * @name PayomaApiWithdrawParameters
     * @summary Payoma withdrawal parameters (only for authorized users)
     * @request GET:/api/PayomaApi/Parameters/Withdraw
     */
    payomaApiWithdrawParameters: (
      query?: {
        currencyCode?: string
        countryCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPayomaModelsApiWithdrawParametersResponseModel, void>({
        path: `/api/PayomaApi/Parameters/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 'hasAnyCards' value indicates if there is a need to create new user card.
     *
     * @tags Payoma
     * @name PayomaApiWithdrawConfiguration
     * @summary Payoma withdrawal configuration (only for authorized users)
     * @request GET:/api/PayomaApi/Configuration/Withdraw
     */
    payomaApiWithdrawConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsPayomaModelsApiWithdrawConfigurationModel, void>({
        path: `/api/PayomaApi/Configuration/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiWithdraw
     * @summary Withdraw funds via Payoma (only for authorized users)
     * @request POST:/api/PayomaApi/Withdraw
     */
    payomaApiWithdraw: (model: PortalPsPayomaModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayomaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payoma
     * @name PayomaApiAdd
     * @summary Add funds via Payoma (only for authorized users)
     * @request POST:/api/PayomaApi/Add
     */
    payomaApiAdd: (model: PortalPsPayomaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayomaModelsApiDepositModel, void>({
        path: `/api/PayomaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiAdd
     * @summary Add funds via PayPal (only for authorized users)
     * @request POST:/api/PayPalApi/Add
     */
    payPalApiAdd: (model: PortalPsPaypalModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaypalModelsApiDepositModel, void>({
        path: `/api/PayPalApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiNotice
     * @summary Notice about adding funds via PayPal (only for authorized users)
     * @request POST:/api/PayPalApi/Notice
     */
    payPalApiNotice: (model: PortalPsPaypalModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/PayPalApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayPal
     * @name PayPalApiWithdraw
     * @summary Withdraw funds via PayPal (only for authorized users)
     * @request POST:/api/PayPalApi/Withdraw
     */
    payPalApiWithdraw: (model: PortalPsPaypalModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayPalApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiAdd
     * @summary Add funds via PaySafeCard (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Add
     */
    paySafeCardApiAdd: (model: PortalPsPaysafecardModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaysafecardModelsApiDepositModel, void>({
        path: `/api/PaySafeCardApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiNotice
     * @summary Notice about adding funds via PaySafeCard (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Notice
     */
    paySafeCardApiNotice: (
      model: PortalPsPaysafecardModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PaySafeCardApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaySafeCard
     * @name PaySafeCardApiWithdraw
     * @summary Withdraw funds via PaySafeCard (only for authorized users)
     * @request POST:/api/PaySafeCardApi/Withdraw
     */
    paySafeCardApiWithdraw: (
      model: PortalPsPaysafecardModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPaysafecardModelsApiWithdrawResultModel, void>({
        path: `/api/PaySafeCardApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this parameters on request to add funds
     *
     * @tags PayToday
     * @name PayTodayApiGetCreditBanks
     * @summary Get credit bank models
     * @request GET:/api/PayTodayApi/GetCreditBanks
     * @deprecated
     */
    payTodayApiGetCreditBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], void>({
        path: `/api/PayTodayApi/GetCreditBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this parameters on request to add funds
     *
     * @tags PayToday
     * @name PayTodayApiCreditBanks
     * @summary Get credit bank models
     * @request GET:/api/PayTodayApi/CreditBanks
     */
    payTodayApiCreditBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], void>({
        path: `/api/PayTodayApi/CreditBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this parameters on request to add funds
     *
     * @tags PayToday
     * @name PayTodayApiGetDebitBanks
     * @summary Get debit bank models
     * @request GET:/api/PayTodayApi/GetDebitBanks
     * @deprecated
     */
    payTodayApiGetDebitBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], void>({
        path: `/api/PayTodayApi/GetDebitBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Use this parameters on request to add funds
     *
     * @tags PayToday
     * @name PayTodayApiDebitBanks
     * @summary Get debit bank models
     * @request GET:/api/PayTodayApi/DebitBanks
     */
    payTodayApiDebitBanks: (params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiBankModel[], void>({
        path: `/api/PayTodayApi/DebitBanks`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description If bank is offline(online parameters null,offline not null), use offline parameters model
     *
     * @tags PayToday
     * @name PayTodayApiAdd
     * @summary Add funds via PayToday (only for authorized users)
     * @request POST:/api/PayTodayApi/Add
     */
    payTodayApiAdd: (model: PortalPsPaytodayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPaytodayModelsApiDepositModel, void>({
        path: `/api/PayTodayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiNotice
     * @summary Notice about adding funds via PayToday (only for authorized users)
     * @request POST:/api/PayTodayApi/Notice
     */
    payTodayApiNotice: (model: PortalPsPaytodayModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/PayTodayApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayToday
     * @name PayTodayApiWithdraw
     * @summary Withdraw funds via PayToday (only for authorized users)
     * @request POST:/api/PayTodayApi/Withdraw
     */
    payTodayApiWithdraw: (
      model: PortalPsPaytodayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayTodayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiAdd
     * @summary Add funds via Payza (only for authorized users)
     * @request POST:/api/PayzaApi/Add
     */
    payzaApiAdd: (model: PortalPsPayzaModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayzaModelsApiDepositModel, void>({
        path: `/api/PayzaApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiNotice
     * @summary Notice about adding funds via Payza (only for authorized users)
     * @request POST:/api/PayzaApi/Notice
     */
    payzaApiNotice: (model: PortalPsPayzaModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/PayzaApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payza
     * @name PayzaApiWithdraw
     * @summary Withdraw funds via Payza (only for authorized users)
     * @request POST:/api/PayzaApi/Withdraw
     */
    payzaApiWithdraw: (model: PortalPsPayzaModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayzaApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/PayzenApi/Banks
     */
    payzenApiBanks: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/PayzenApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiProvinces
     * @summary Get provinces list (only for authorized users)
     * @request GET:/api/PayzenApi/Provinces
     */
    payzenApiProvinces: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/PayzenApi/Provinces`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiAreas
     * @summary Get areas list (only for authorized users)
     * @request GET:/api/PayzenApi/Areas
     */
    payzenApiAreas: (
      query?: {
        countryCode?: string
        currencyCode?: string
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemInt32MscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/PayzenApi/Areas`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiAdd
     * @summary Add funds via Payzen (only for authorized users)
     * @request POST:/api/PayzenApi/Add
     */
    payzenApiAdd: (model: PortalPsPayzenModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPayzenModelsApiDepositModel, void>({
        path: `/api/PayzenApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiNotice
     * @summary Notice about adding funds via Payzen (only for authorized users)
     * @request POST:/api/PayzenApi/Notice
     */
    payzenApiNotice: (model: PortalPsPayzenModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/PayzenApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiWithdraw
     * @summary Withdraw funds via Payzen (only for authorized users)
     * @request POST:/api/PayzenApi/Withdraw
     */
    payzenApiWithdraw: (model: PortalPsPayzenModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayzenApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payzen
     * @name PayzenApiBankTransferWithdrawal
     * @summary Bank transfer withdraw via Payzen (only for authorized users)
     * @request POST:/api/PayzenApi/BankTransferWithdrawal
     */
    payzenApiBankTransferWithdrawal: (
      model: PortalPsPayzenModelsApiWithdrawBankTransferModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PayzenApi/BankTransferWithdrawal`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiAdd
     * @summary Add funds via PerfectMoney (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Add
     */
    perfectMoneyApiAdd: (
      model: PortalPsPerfectmoneyModelsApiAddModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPerfectmoneyModelsApiDepositModel, void>({
        path: `/api/PerfectMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiNotice
     * @summary Notice about adding funds via PerfectMoney (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Notice
     */
    perfectMoneyApiNotice: (
      model: PortalPsPerfectmoneyModelsApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PerfectMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PerfectMoney
     * @name PerfectMoneyApiWithdraw
     * @summary Withdraw funds via PerfectMoney (only for authorized users)
     * @request POST:/api/PerfectMoneyApi/Withdraw
     */
    perfectMoneyApiWithdraw: (
      model: PortalPsPerfectmoneyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PerfectMoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiBanks
     * @summary Get banks list (only for authorized users)
     * @request GET:/api/PoliApi/Banks
     */
    poliApiBanks: (
      query?: { balanceOperationTypeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsPoliModelsApiBankModel[], void>({
        path: `/api/PoliApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiAdd
     * @summary Add funds via Poli (only for authorized users)
     * @request POST:/api/PoliApi/Add
     */
    poliApiAdd: (model: PortalPsPoliModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsPoliModelsApiDepositModel, void>({
        path: `/api/PoliApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiNotice
     * @summary Notice about adding funds via Poli (only for authorized users)
     * @request POST:/api/PoliApi/Notice
     */
    poliApiNotice: (model: PortalPsPoliModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/PoliApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Poli
     * @name PoliApiWithdraw
     * @summary Withdraw funds via Poli (only for authorized users)
     * @request POST:/api/PoliApi/Withdraw
     */
    poliApiWithdraw: (model: PortalPsPoliModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PoliApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PrepaidCard
     * @name PrepaidCardApiAdd
     * @summary Add funds with your prepaid card (only for authorized users)
     * @request POST:/api/PrepaidCardApi/Add
     */
    prepaidCardApiAdd: (model: PortalPsPrepaidcardModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PrepaidCardApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PrepaidCard
     * @name PrepaidCardApiWithdraw
     * @summary Creating a request for a prepaid card (only for authorized users)
     * @request POST:/api/PrepaidCardApi/Withdraw
     */
    prepaidCardApiWithdraw: (
      model: PortalPsPrepaidcardModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/PrepaidCardApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCountries
     * @summary Get countries list
     * @request GET:/api/ProfileApi/Countries
     */
    profileApiCountries: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiCountryModel[], void>({
        path: `/api/ProfileApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCities
     * @summary Get cities list
     * @request GET:/api/ProfileApi/Cities
     */
    profileApiCities: (
      query: { countryCode: string; cityNamePart?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsApiCityModel[], void>({
        path: `/api/ProfileApi/Cities`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiNationalities
     * @summary Get nationalities list
     * @request GET:/api/ProfileApi/Nationalities
     */
    profileApiNationalities: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsApiNationalityModel[], void>({
        path: `/api/ProfileApi/Nationalities`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiCorporate
     * @summary Create or update Corporate profile (only for authorized users)
     * @request POST:/api/ProfileApi/Corporate
     */
    profileApiCorporate: (
      model: PortalUserSettingsModelsApiCorporateProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ProfileApi/Corporate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiJoint
     * @summary Update Joint profile (only for authorized users)
     * @request POST:/api/ProfileApi/Joint
     */
    profileApiJoint: (
      model: PortalUserSettingsModelsApiJointProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ProfileApi/Joint`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name ProfileApiPersonal
     * @summary Update Personal profile (only for authorized users)
     * @request POST:/api/ProfileApi/Personal
     */
    profileApiPersonal: (
      model: PortalUserSettingsModelsApiPersonalProfileUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/ProfileApi/Personal`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiAdd
     * @summary Add funds via Qiwi (only for authorized users)
     * @request POST:/api/QiwiApi/Add
     */
    qiwiApiAdd: (model: PortalPsQiwiModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsQiwiModelsApiDepositModel, void>({
        path: `/api/QiwiApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiNotice
     * @summary Notice about adding funds via Qiwi (only for authorized users)
     * @request POST:/api/QiwiApi/Notice
     */
    qiwiApiNotice: (model: PortalPsQiwiModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/QiwiApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Qiwi
     * @name QiwiApiWithdraw
     * @summary Withdraw funds via Qiwi (only for authorized users)
     * @request POST:/api/QiwiApi/Withdraw
     */
    qiwiApiWithdraw: (model: PortalPsQiwiModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/QiwiApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireCollection
     * @summary Get questionnaire configurations (only for authorized users)
     * @request GET:/api/QuestionnaireApi/Collection
     */
    questionnaireApiQuestionnaireCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireModel[],
        void
      >({
        path: `/api/QuestionnaireApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireCreate
     * @summary Create questionnaire configuration (only for authorized users)
     * @request POST:/api/QuestionnaireApi/Create
     */
    questionnaireApiQuestionnaireCreate: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireModel,
        void
      >({
        path: `/api/QuestionnaireApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireUpdate
     * @summary Update questionnaire configuration (only for authorized users)
     * @request PUT:/api/QuestionnaireApi/Update
     */
    questionnaireApiQuestionnaireUpdate: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireModel,
        void
      >({
        path: `/api/QuestionnaireApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireDelete
     * @summary Delete questionnaire configuration (only for authorized users)
     * @request DELETE:/api/QuestionnaireApi/Delete
     */
    questionnaireApiQuestionnaireDelete: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireConfigurationQuestionnaireDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QuestionnaireApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireAdditionalInformationCollection
     * @summary Get questionnaire additional information collection (only for authorized users)
     * @request GET:/api/QuestionnaireApi/AdditionalInformation/Collection
     */
    questionnaireApiQuestionnaireAdditionalInformationCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationModel[],
        void
      >({
        path: `/api/QuestionnaireApi/AdditionalInformation/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireAdditionalInformationCreate
     * @summary Create questionnaire additional information (only for authorized users)
     * @request POST:/api/QuestionnaireApi/AdditionalInformation/Create
     */
    questionnaireApiQuestionnaireAdditionalInformationCreate: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationModel,
        void
      >({
        path: `/api/QuestionnaireApi/AdditionalInformation/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireAdditionalInformationUpdate
     * @summary Update questionnaire additional information (only for authorized users)
     * @request PUT:/api/QuestionnaireApi/AdditionalInformation/Update
     */
    questionnaireApiQuestionnaireAdditionalInformationUpdate: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationModel,
        void
      >({
        path: `/api/QuestionnaireApi/AdditionalInformation/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionnaireAdditionalInformationDelete
     * @summary Delete questionnaire additional information (only for authorized users)
     * @request DELETE:/api/QuestionnaireApi/AdditionalInformation/Delete
     */
    questionnaireApiQuestionnaireAdditionalInformationDelete: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireAdditionalInformationQuestionnaireAdditionalInformationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QuestionnaireApi/AdditionalInformation/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionCollection
     * @summary Get questions collection (only for authorized users)
     * @request GET:/api/QuestionnaireApi/Question/Collection
     */
    questionnaireApiQuestionCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiQuestionQuestionnaireQuestionModel[], void>({
        path: `/api/QuestionnaireApi/Question/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionCreate
     * @summary Create question (only for authorized users)
     * @request POST:/api/QuestionnaireApi/Question/Create
     */
    questionnaireApiQuestionCreate: (
      model: PortalUserQuestionnaireModelsApiQuestionQuestionCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiQuestionQuestionnaireQuestionModel, void>({
        path: `/api/QuestionnaireApi/Question/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionUpdate
     * @summary Update question (only for authorized users)
     * @request PUT:/api/QuestionnaireApi/Question/Update
     */
    questionnaireApiQuestionUpdate: (
      model: PortalUserQuestionnaireModelsApiQuestionQuestionUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiQuestionQuestionnaireQuestionModel, void>({
        path: `/api/QuestionnaireApi/Question/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiQuestionDelete
     * @summary Delete question (only for authorized users)
     * @request DELETE:/api/QuestionnaireApi/Question/Delete
     */
    questionnaireApiQuestionDelete: (
      model: PortalUserQuestionnaireModelsApiQuestionQuestionDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QuestionnaireApi/Question/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiAnswerCollection
     * @summary Get answers collection (only for authorized users)
     * @request GET:/api/QuestionnaireApi/Answer/Collection
     */
    questionnaireApiAnswerCollection: (
      query?: { questionId?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiAnswerQuestionnaireAnswerModel[], void>({
        path: `/api/QuestionnaireApi/Answer/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiAnswerCreate
     * @summary Create answer (only for authorized users)
     * @request POST:/api/QuestionnaireApi/Answer/Create
     */
    questionnaireApiAnswerCreate: (
      model: PortalUserQuestionnaireModelsApiAnswerAnswerCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiAnswerQuestionnaireAnswerModel, void>({
        path: `/api/QuestionnaireApi/Answer/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiAnswerUpdate
     * @summary Update answer (only for authorized users)
     * @request PUT:/api/QuestionnaireApi/Answer/Update
     */
    questionnaireApiAnswerUpdate: (
      model: PortalUserQuestionnaireModelsApiAnswerAnswerUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiAnswerQuestionnaireAnswerModel, void>({
        path: `/api/QuestionnaireApi/Answer/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiAnswerDelete
     * @summary Delete answer (only for authorized users)
     * @request DELETE:/api/QuestionnaireApi/Answer/Delete
     */
    questionnaireApiAnswerDelete: (
      model: PortalUserQuestionnaireModelsApiAnswerAnswerDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QuestionnaireApi/Answer/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags Questionnaire
     * @name QuestionnaireApiAnswerTypes
     * @summary Gets answer types collection (only for authorized users)
     * @request GET:/api/QuestionnaireApi/AnswerTypes
     */
    questionnaireApiAnswerTypes: (query?: { instanceName?: string }, params: RequestParams = {}) =>
      this.request<PortalUserQuestionnaireModelsApiAnswerAnswerTypeModel[], void>({
        path: `/api/QuestionnaireApi/AnswerTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire
     * @name QuestionnaireApiCheckAnswers
     * @summary Check and save answers for survey (only for authorized users)
     * @request POST:/api/QuestionnaireApi/CheckAnswers
     */
    questionnaireApiCheckAnswers: (
      model: PortalUserQuestionnaireModelsApiQuestionnaireAnswerModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/QuestionnaireApi/CheckAnswers`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Questionnaire
     * @name QuestionnaireApiTemplate
     * @summary Gets survey template (only for authorized users)
     * @request GET:/api/QuestionnaireApi/Template
     */
    questionnaireApiTemplate: (
      query?: { 'model.questionnaireCode'?: string; 'model.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserQuestionnaireModelsApiQuestionnaireTemplateModel, void>({
        path: `/api/QuestionnaireApi/Template`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiCreditDebitCardsAdd
     * @summary Add funds from credit card via RBKmoney (only for authorized users)
     * @request POST:/api/RbkMoneyApi/CreditDebitCardsAdd
     */
    rbkMoneyApiCreditDebitCardsAdd: (
      model: PortalPsRbkmoneyModelsApiAddCardsModel,
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/api/RbkMoneyApi/CreditDebitCardsAdd`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiAdd
     * @summary Add funds via RBKmoney (only for authorized users)
     * @request POST:/api/RbkMoneyApi/Add
     */
    rbkMoneyApiAdd: (model: PortalPsRbkmoneyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsRbkmoneyModelsApiDepositModel, void>({
        path: `/api/RbkMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags RbkMoney
     * @name RbkMoneyApiNotice
     * @summary Notice about adding funds via RBKmoney (only for authorized users)
     * @request POST:/api/RbkMoneyApi/Notice
     */
    rbkMoneyApiNotice: (model: PortalPsRbkmoneyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/RbkMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name PasswordApiRecover
     * @summary Recover password
     * @request POST:/api/PasswordApi/Recover
     */
    passwordApiRecover: (
      model: PortalUserIdentityPasswordModelsApiRecoverPasswordModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PasswordApi/Recover`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name PasswordApiReset
     * @summary Reset password
     * @request POST:/api/PasswordApi/Reset
     */
    passwordApiReset: (
      model: PortalUserIdentityPasswordModelsApiResetPasswordModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/PasswordApi/Reset`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name PasswordApiCheckRecoveryLinkExpiration
     * @summary Check password recovery link expiration
     * @request GET:/api/PasswordApi/CheckRecoveryLinkExpiration
     */
    passwordApiCheckRecoveryLinkExpiration: (
      query?: { recoveryId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalUserIdentityPasswordModelsApiRecoveryPasswordLinkExpirationResponseModel,
        void
      >({
        path: `/api/PasswordApi/CheckRecoveryLinkExpiration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiAccounts
     * @summary Get account's recovery types (only for authorized users)
     * @request GET:/api/RecoveryApi/Accounts
     */
    recoveryApiAccounts: (
      query?: { recoveryTypes?: string[]; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiAccountModel[], void>({
        path: `/api/RecoveryApi/Accounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiActions
     * @summary Recovery action history (only for authorized users)
     * @request GET:/api/RecoveryApi/Actions
     */
    recoveryApiActions: (
      query?: {
        recoveryTypeName?: string
        recoveryStatusName?: string
        accountIdentifier?: string
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiRecoveryActionsResponseModel, void>({
        path: `/api/RecoveryApi/Actions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiCreate
     * @summary Request recovery (only for authorized users)
     * @request POST:/api/RecoveryApi/Create
     */
    recoveryApiCreate: (
      model: PortalUserRecoveryModelsApiRecoveryActionCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserRecoveryModelsApiRecoveryActionModel, void>({
        path: `/api/RecoveryApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiUpdate
     * @summary Update recovery action (only for authorized users)
     * @request POST:/api/RecoveryApi/Update
     */
    recoveryApiUpdate: (
      model: PortalUserRecoveryModelsApiRecoveryActionUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RecoveryApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recovery
     * @name RecoveryApiReset
     * @summary Reset forgotten password/PIN code/etc. (only for authorized users)
     * @request POST:/api/RecoveryApi/Reset
     */
    recoveryApiReset: (model: PortalUserRecoveryModelsApiResetModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/RecoveryApi/Reset`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiAdd
     * @summary Add funds via Redeem (only for authorized users)
     * @request POST:/api/RedeemApi/Add
     */
    redeemApiAdd: (model: PortalPsRedeemModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/RedeemApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiWithdraw
     * @summary Withdraw funds via Redeem (only for authorized users)
     * @request POST:/api/RedeemApi/Withdraw
     */
    redeemApiWithdraw: (model: PortalPsRedeemModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/RedeemApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RedeemApiCodes
     * @summary Get codes list (only for authorized users)
     * @request GET:/api/RedeemApi/Codes
     */
    redeemApiCodes: (
      query?: {
        dateFrom?: string
        dateTo?: string
        pageNumber?: number
        pageSize?: number
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsRedeemModelsApiRedeemCodesCollectionModel, void>({
        path: `/api/RedeemApi/Codes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiCountries
     * @summary Countries list (only for authorized users)
     * @request GET:/api/RegionApi/Countries
     */
    regionApiCountries: (
      query?: { regionName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleConfigurationModelsApiRegionCountryModel[], void>({
        path: `/api/RegionApi/Countries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiRegions
     * @summary Regions list (only for authorized users)
     * @request GET:/api/RegionApi/Regions
     */
    regionApiRegions: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleConfigurationModelsApiRegionRegionModel[], void>({
        path: `/api/RegionApi/Regions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiCreate
     * @summary Create region (only for authorized users)
     * @request POST:/api/RegionApi/Create
     */
    regionApiCreate: (
      model: PortalModuleConfigurationModelsApiRegionCreateRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RegionApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiUpdate
     * @summary Update region (only for authorized users)
     * @request POST:/api/RegionApi/Update
     */
    regionApiUpdate: (
      model: PortalModuleConfigurationModelsApiRegionUpdateRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RegionApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Region
     * @name RegionApiDelete
     * @summary Delete region (only for authorized users)
     * @request POST:/api/RegionApi/Delete
     */
    regionApiDelete: (
      model: PortalModuleConfigurationModelsApiRegionDeleteRegionModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RegionApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Registration
     * @name RegistrationApiComplete
     * @summary New user registration
     * @request POST:/api/RegistrationApi/Complete
     */
    registrationApiComplete: (
      request: PortalModuleRegistrationUserModelsApiRegistrationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleRegistrationUserModelsApiRegistrationResponseModel, void>({
        path: `/api/RegistrationApi/Complete`,
        method: 'POST',
        body: request,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
 * No description
 *
 * @tags Salv
 * @name SalvApiResult
 * @summary PERSON_CHECKS_RESOLVED is triggered when the last active person screening alert or person online monitoring alert is closed (alert status is changed to a non-active status)
TRANSACTION_CHECKS_RESOLVED is triggered when the last active transaction screening alert or transaction online monitoring alert of that person is closed (alert status is changed to a non-active status).
 * @request POST:/api/SalvApi/Result
 */
    salvApiResult: (model: SalvServiceModelsWebhookWebhook, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/SalvApi/Result`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Parameters, used in execution of Skrill.js script
     *
     * @tags Skrill
     * @name SkrillApiIssueParameters
     * @summary Get issue card parameters for Skrill (only for authorized users)
     * @request GET:/api/SkrillApi/Parameters/Issue
     */
    skrillApiIssueParameters: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsSkrillModelsApiCardIssueParametersResponseModel, any>({
        path: `/api/SkrillApi/Parameters/Issue`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiCreditDebitCardsAdd
     * @summary Add funds from Skrill card via Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/CreditDebitCards/Add
     */
    skrillApiCreditDebitCardsAdd: (
      model: PortalPsSkrillModelsApiCreditDebitCardsAddModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/SkrillApi/CreditDebitCards/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiCreditDebitCardsWithdraw
     * @summary Withdraw funds from Skrill card via Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/CreditDebitCards/Withdraw
     */
    skrillApiCreditDebitCardsWithdraw: (
      model: PortalPsSkrillModelsApiCreditDebitCardsWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/SkrillApi/CreditDebitCards/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiGet
     * @summary Get Skrill card list (only for authorized users)
     * @request GET:/api/SkrillApi/Get
     */
    skrillApiGet: (
      query?: { payemntOptionCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSkrillModelsApiCardModel[], any>({
        path: `/api/SkrillApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Method requires execution of Skrill.js script to get fields token, masked, bin, last
     *
     * @tags Skrill
     * @name SkrillApiIssue
     * @summary Issue a new card in Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/Issue
     */
    skrillApiIssue: (
      model: PortalPsSkrillModelsApiCardIssueRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSkrillModelsApiCardModel, any>({
        path: `/api/SkrillApi/Issue`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiAdd
     * @summary Add funds via Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/Add
     */
    skrillApiAdd: (model: PortalPsSkrillModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsSkrillModelsApiDepositModel, any>({
        path: `/api/SkrillApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiWithdraw
     * @summary Withdraw funds via Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/Withdraw
     */
    skrillApiWithdraw: (model: PortalPsSkrillModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, any>({
        path: `/api/SkrillApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiNotice
     * @summary Notice about adding funds via Skrill (only for authorized users)
     * @request POST:/api/SkrillApi/Notice
     */
    skrillApiNotice: (model: PortalPsSkrillModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/SkrillApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Skrill
     * @name SkrillApiDelete
     * @summary Delete skrill card (only for authorized users)
     * @request POST:/api/SkrillApi/Delete
     */
    skrillApiDelete: (model: PortalPsSkrillModelsApiCardDeleteModel, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/SkrillApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendProfileVerificationStatusNotification
     * @summary Send profile verification status notification (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendProfileVerificationStatusNotification
     */
    smsNotificationApiSendProfileVerificationStatusNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendProfileVerificationStatusNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/SmsNotificationApi/SendProfileVerificationStatusNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendRecoveryStatusChangeNotification
     * @summary Send notification of recovery (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendRecoveryStatusChangeNotification
     */
    smsNotificationApiSendRecoveryStatusChangeNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendRecoveryNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/SmsNotificationApi/SendRecoveryStatusChangeNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SmsNotification
     * @name SmsNotificationApiSendFinanceOperationStatusChangeNotification
     * @summary Send notification of finance operation status change (only for authorized users)
     * @request POST:/api/SmsNotificationApi/SendFinanceOperationStatusChangeNotification
     */
    smsNotificationApiSendFinanceOperationStatusChangeNotification: (
      model: PortalUserSettingsModelsApiSmsNotificationSendFinanceOperationStatusChangeNotificationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/SmsNotificationApi/SendFinanceOperationStatusChangeNotification`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns names of custom fields and bank details fields are required to be filled by user.
     *
     * @tags SorexPay
     * @name SorexPayApiWithdrawParameters
     * @summary SorexPay withdrawal parameters (only for authorized users)
     * @request GET:/api/SorexPayApi/Parameters/Withdraw
     */
    sorexPayApiWithdrawParameters: (
      query?: {
        currencyCode?: string
        countryCode?: string
        balanceOperationTypeName?: string
        userCardId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSorexpayModelsApiWithdrawParametersResponseModel, void>({
        path: `/api/SorexPayApi/Parameters/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description 'hasAnyCards' value indicates if there is a need to create new user card.
     *
     * @tags SorexPay
     * @name SorexPayApiWithdrawConfiguration
     * @summary SorexPay withdrawal configuration (only for authorized users)
     * @request GET:/api/SorexPayApi/Configuration/Withdraw
     */
    sorexPayApiWithdrawConfiguration: (
      query?: { domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsSorexpayModelsApiWithdrawConfigurationModel, void>({
        path: `/api/SorexPayApi/Configuration/Withdraw`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SorexPay
     * @name SorexPayApiWithdraw
     * @summary Withdraw funds via SorexPay (only for authorized users)
     * @request POST:/api/SorexPayApi/Withdraw
     */
    sorexPayApiWithdraw: (
      model: PortalPsSorexpayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/SorexPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SorexPay
     * @name SorexPayApiAdd
     * @summary Add funds via SorexPay (only for authorized users)
     * @request POST:/api/SorexPayApi/Add
     */
    sorexPayApiAdd: (model: PortalPsSorexpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsSorexpayModelsApiDepositModel, void>({
        path: `/api/SorexPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SumSub
     * @name SumSubApiResult
     * @summary SumSub webhook endpoint
     * @request POST:/api/SumSubApi/Result
     */
    sumSubApiResult: (
      model: VerificationServicesSumsubModelsJsonWebhook,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/SumSubApi/Result`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SumSub
     * @name SumSubApiVerificationForm
     * @summary Get SumSub verification form (only for authorized users)
     * @request GET:/api/SumSubApi/VerificationForm
     */
    sumSubApiVerificationForm: (
      query?: { 'model.gradeName'?: string; 'model.domainName'?: string },
      params: RequestParams = {},
    ) =>
      this.request<VerificationServicesSumsubModelsApiSumSubVerificationFormModel, void>({
        path: `/api/SumSubApi/VerificationForm`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tether
     * @name TetherApiNotice
     * @summary Notice about adding funds via Tether (only for authorized users)
     * @request POST:/api/TetherApi/Notice
     */
    tetherApiNotice: (model: PortalPsTetherModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/TetherApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tether
     * @name TetherApiWithdraw
     * @summary Withdraw funds via Tether (only for authorized users)
     * @request POST:/api/TetherApi/Withdraw
     */
    tetherApiWithdraw: (model: PortalPsTetherModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/TetherApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Returns trading products, currencies, leverages and other parameters required for trading account opening.
     *
     * @tags Trading
     * @name TradingProductApiConfiguration
     * @summary Trading product configuration (only for authorized users)
     * @request GET:/api/TradingProductApi/Configuration
     */
    tradingProductApiConfiguration: (
      query?: {
        tradingGroup?: string
        tradingPlatformType?: string
        tradingProductType?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<TpCoreModelsApiTradingProductModel[], void>({
        path: `/api/TradingProductApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trading
     * @name TradingAccountApiCreate
     * @summary Create trading account (only for authorized users)
     * @request POST:/api/TradingAccountApi/Create
     */
    tradingAccountApiCreate: (
      model: AtTradingModelsTradingAccountCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/TradingAccountApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformConfiguration
     * @name TradingPlatformConfigurationApiCreate
     * @summary Create trading platform configuration (only for authorized users)
     * @request POST:/api/TradingPlatformConfigurationApi/Create
     */
    tradingPlatformConfigurationApiCreate: (
      model: TpCoreModelsApiTradingPlatformConfigurationCreateTradingPlatformConfigurationModel,
      params: RequestParams = {},
    ) =>
      this.request<
        TpCoreModelsApiTradingPlatformConfigurationTradingPlatformConfigurationApiModel,
        void
      >({
        path: `/api/TradingPlatformConfigurationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformConfiguration
     * @name TradingPlatformConfigurationApiCollection
     * @summary Gets trading platform configuration collection (only for authorized users)
     * @request GET:/api/TradingPlatformConfigurationApi/Collection
     */
    tradingPlatformConfigurationApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        TpCoreModelsApiTradingPlatformConfigurationTradingPlatformConfigurationApiModel[],
        void
      >({
        path: `/api/TradingPlatformConfigurationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformConfiguration
     * @name TradingPlatformConfigurationApiUpdate
     * @summary Update trading platform configuration (only for authorized users)
     * @request POST:/api/TradingPlatformConfigurationApi/Update
     */
    tradingPlatformConfigurationApiUpdate: (
      model: TpCoreModelsApiTradingPlatformConfigurationUpdateTradingPlatformConfigurationModel,
      params: RequestParams = {},
    ) =>
      this.request<
        TpCoreModelsApiTradingPlatformConfigurationTradingPlatformConfigurationApiModel,
        void
      >({
        path: `/api/TradingPlatformConfigurationApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformConfiguration
     * @name TradingPlatformConfigurationApiDelete
     * @summary Delete trading platform configuration (only for authorized users)
     * @request POST:/api/TradingPlatformConfigurationApi/Delete
     */
    tradingPlatformConfigurationApiDelete: (
      model: TpCoreModelsApiTradingPlatformConfigurationDeleteTradingPlatformConfigurationModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/TradingPlatformConfigurationApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformSettingApi
     * @name TradingPlatformSettingApiCreate
     * @summary Create trading platform setting (only for authorized users)
     * @request POST:/api/TradingPlatformSettingApi/Create
     */
    tradingPlatformSettingApiCreate: (
      model: TpCoreModelsApiTradingPlatfromSettingCreateTradingPlatformSettingModel,
      params: RequestParams = {},
    ) =>
      this.request<TpCoreModelsApiTradingPlatfromSettingTradingPlatformSettingApiModel, void>({
        path: `/api/TradingPlatformSettingApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformSettingApi
     * @name TradingPlatformSettingApiCollection
     * @summary Gets trading platform setting collection (only for authorized users)
     * @request GET:/api/TradingPlatformSettingApi/Collection
     */
    tradingPlatformSettingApiCollection: (
      query?: { instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<TpCoreModelsApiTradingPlatfromSettingTradingPlatformSettingApiModel[], void>({
        path: `/api/TradingPlatformSettingApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformSettingApi
     * @name TradingPlatformSettingApiUpdate
     * @summary Update trading platform setting (only for authorized users)
     * @request POST:/api/TradingPlatformSettingApi/Update
     */
    tradingPlatformSettingApiUpdate: (
      model: TpCoreModelsApiTradingPlatfromSettingUpdateTradingPlatformSettingModel,
      params: RequestParams = {},
    ) =>
      this.request<TpCoreModelsApiTradingPlatfromSettingTradingPlatformSettingApiModel, void>({
        path: `/api/TradingPlatformSettingApi/Update`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR, FINANCE, ACCOUNT_VERIFICATION and COMPLIANCE_OFFICER roles
     *
     * @tags TradingPlatformSettingApi
     * @name TradingPlatformSettingApiDelete
     * @summary Delete trading platform setting (only for authorized users)
     * @request POST:/api/TradingPlatformSettingApi/Delete
     */
    tradingPlatformSettingApiDelete: (
      model: TpCoreModelsApiTradingPlatfromSettingDeleteTradingPlatformSettingModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/TradingPlatformSettingApi/Delete`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TradingView
     * @name TradingViewApiRegistrate
     * @summary Register Request
     * @request POST:/api/TradingViewApi/Registrate
     */
    tradingViewApiRegistrate: (
      model: PortalExtensionsTradingviewModelsRegistrationRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/TradingViewApi/Registrate`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TradingView
     * @name TradingViewApiComplete
     * @summary Complete Registration
     * @request GET:/api/TradingViewApi/Complete
     */
    tradingViewApiComplete: (
      query: { code: string; state: string; returnUrl?: string },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/TradingViewApi/Complete`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description User info for TransactPro deposit request. May be edited before passing to /api/TransactProApi/Add
     *
     * @tags TransactPro
     * @name TransactProApiDepositConfiguration
     * @summary TransactPro deposit configuration (only for authorized users)
     * @request GET:/api/TransactProApi/Configuration/Deposit
     */
    transactProApiDepositConfiguration: (params: RequestParams = {}) =>
      this.request<PortalPsTransactproModelsApiDepositConfigurationModel, void>({
        path: `/api/TransactProApi/Configuration/Deposit`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags TransactPro
     * @name TransactProApiAdd
     * @summary Add funds via TransactPro (only for authorized users)
     * @request POST:/api/TransactProApi/Add
     */
    transactProApiAdd: (model: PortalPsTransactproModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsTransactproModelsApiDepositModel, void>({
        path: `/api/TransactProApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiAdd
     * @summary Create transfer request (only for authorized users)
     * @request POST:/api/RequestTransferApi/Add
     */
    requestTransferApiAdd: (
      model: PortalPsTransferModelsApiRequestTransferAddModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RequestTransferApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiNotice
     * @summary Notice transfer requests (only for authorized users)
     * @request POST:/api/RequestTransferApi/Notice
     */
    requestTransferApiNotice: (
      model: PortalPsTransferModelsApiRequestTransferNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsTransferModelsApiRequestTransferResponseModel, void>({
        path: `/api/RequestTransferApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name RequestTransferApiChangeStatus
     * @summary Change transfer request status (only for authorized users)
     * @request POST:/api/RequestTransferApi/ChangeStatus
     */
    requestTransferApiChangeStatus: (
      model: PortalPsTransferModelsApiRequestTransferActionModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/RequestTransferApi/ChangeStatus`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Moves money from one financial account to another.
     *
     * @tags Transfer
     * @name TransferApiCreate
     * @summary OBSOLETE!!! Use POST api/TransferApi/Create instead (only for authorized users)
     * @request GET:/api/TransferApi/Create
     * @deprecated
     */
    transferApiCreate: (
      query?: {
        'model.accountFrom'?: string
        'model.accountTo'?: string
        'model.currencyFrom'?: string
        'model.currencyTo'?: string
        'model.amount'?: number
        'model.pinCode'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiTransferResponseModel, void>({
        path: `/api/TransferApi/Create`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiCreate2
     * @summary Transfer funds (only for authorized users)
     * @request POST:/api/TransferApi/Create
     * @originalName transferApiCreate
     * @duplicate
     */
    transferApiCreate2: (
      model: FinanceTransferModelsApiTransferCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/TransferApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiAccounts
     * @summary Gets accounts for current user
     * @request GET:/api/TransferApi/Accounts
     */
    transferApiAccounts: (
      query?: { gatewayPublicKey?: string; userId?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiAccountModel[], any>({
        path: `/api/TransferApi/Accounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiPockets
     * @summary Gets pockets of account (only for authorized users)
     * @request GET:/api/TransferApi/Pockets
     */
    transferApiPockets: (
      query?: { accountNumber?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPocketModel[], any>({
        path: `/api/TransferApi/Pockets`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transfer
     * @name TransferApiPocketsTo
     * @summary Gets pockets of trading account (only for authorized users)
     * @request GET:/api/TransferApi/PocketsTo
     */
    transferApiPocketsTo: (
      query?: { accountNumber?: string; currencyCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiPocketModel[], any>({
        path: `/api/TransferApi/PocketsTo`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiAdd
     * @summary Add funds via Trustly (only for authorized users)
     * @request POST:/api/TrustlyApi/Add
     */
    trustlyApiAdd: (model: PortalPsTrustlyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsTrustlyModelsApiTrustlyFinanceOperationModel, void>({
        path: `/api/TrustlyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiNotice
     * @summary Notice about adding funds via Trustly (only for authorized users)
     * @request POST:/api/TrustlyApi/Notice
     */
    trustlyApiNotice: (model: PortalPsTrustlyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/TrustlyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trustly
     * @name TrustlyApiWithdraw
     * @summary Withdraw funds via Trustly (only for authorized users)
     * @request POST:/api/TrustlyApi/Withdraw
     */
    trustlyApiWithdraw: (
      model: PortalPsTrustlyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalPsTrustlyModelsApiTrustlyFinanceOperationModel, void>({
        path: `/api/TrustlyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiPaymentConfiguration
     * @summary Uphold configuration (only for authorized users)
     * @request GET:/api/UpholdApi/Configuration
     */
    upholdApiPaymentConfiguration: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalPsUpholdModelsApiConfigurationModel, void>({
        path: `/api/UpholdApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiUpholdCards
     * @summary Get uphold cards (only for authorized users)
     * @request GET:/api/UpholdApi/UpholdCards
     */
    upholdApiUpholdCards: (
      query?: {
        isMerchantCardsRequired?: boolean
        merchantDomainName?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemGuidMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/UpholdApi/UpholdCards`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiAdd
     * @summary Add funds via Uphold (only for authorized users)
     * @request POST:/api/UpholdApi/Add
     */
    upholdApiAdd: (model: PortalPsUpholdModelsApiAddModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UpholdApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiNotice
     * @summary Notice about adding funds via Uphold (only for authorized users)
     * @request POST:/api/UpholdApi/Notice
     */
    upholdApiNotice: (model: PortalPsUpholdModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/UpholdApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Uphold
     * @name UpholdApiWithdraw
     * @summary Withdraw funds via Uphold (only for authorized users)
     * @request POST:/api/UpholdApi/Withdraw
     */
    upholdApiWithdraw: (model: PortalPsUpholdModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/UpholdApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Shows the list of user activity information.
     *
     * @tags User
     * @name UserInformationApiActivity
     * @summary User activity information (only for authorized users)
     * @request GET:/api/UserInformationApi/Activity
     */
    userInformationApiActivity: (
      query?: { dateFrom?: string; dateTo?: string; pageNumber?: number; pageSize?: number },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationUserActivityResponseModel, void>({
        path: `/api/UserInformationApi/Activity`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives full user summary information.
     *
     * @tags User
     * @name UserInformationApiSummary
     * @summary User summary information (only for authorized users)
     * @request GET:/api/UserInformationApi/Summary
     */
    userInformationApiSummary: (params: RequestParams = {}) =>
      this.request<PortalUserSettingsModelsUserInformationUserSummaryResponseModel, void>({
        path: `/api/UserInformationApi/Summary`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Gives user's account
     *
     * @tags User
     * @name UserInformationApiSearchUser
     * @summary Search user (only for authorized users)
     * @request POST:/api/UserInformationApi/SearchUser
     */
    userInformationApiSearchUser: (
      model: PortalUserSettingsModelsUserInformationSearchUserRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalUserSettingsModelsUserInformationUserModel[], void>({
        path: `/api/UserInformationApi/SearchUser`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserBlock
     * @name UserBlockApiUserStatus
     * @summary Get user accounts blocking information (only for authorized users)
     * @request GET:/api/UserBlockApi/UserStatus
     */
    userBlockApiUserStatus: (
      query?: { userId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalUserBlockModelsApiAccountBlockModel[], void>({
        path: `/api/UserBlockApi/UserStatus`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserBlock
     * @name UserBlockApiBlock
     * @summary Lock or Ulock user account (only for authorized users)
     * @request POST:/api/UserBlockApi/Block
     */
    userBlockApiBlock: (
      model: PortalUserBlockModelsApiUserBlockModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/UserBlockApi/Block`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name DocumentApiVerificationForm
     * @summary Gets documents verification form info (only for authorized users)
     * @request GET:/api/DocumentApi/VerificationForm
     */
    documentApiVerificationForm: (
      query?: { gradeName?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalModuleVerificationModelsApiDocumentsVerificationVerificationFormModel,
        void
      >({
        path: `/api/DocumentApi/VerificationForm`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description All required documents must be uploaded before
     *
     * @tags Verification
     * @name DocumentApiVerify
     * @summary Request documents verification (only for authorized users)
     * @request POST:/api/DocumentApi/Verify
     */
    documentApiVerify: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/DocumentApi/Verify`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Content-Type: multipart/form-data
     *
     * @tags Verification
     * @name DocumentApiUpload
     * @summary Upload document (only for authorized users)
     * @request POST:/api/DocumentApi/Upload
     */
    documentApiUpload: (
      query?: { documentSetId?: string; documentType?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DocumentApi/Upload`,
        method: 'POST',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name DocumentApiGet
     * @summary Gets documents for current user (only for authorized users)
     * @request GET:/api/DocumentApi/Get
     */
    documentApiGet: (query?: { domainName?: string }, params: RequestParams = {}) =>
      this.request<PortalModuleVerificationModelsApiDocumentsVerificationDocumentModel[], void>({
        path: `/api/DocumentApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Document must belong to current user. Document must have pending status.
     *
     * @tags Verification
     * @name DocumentApiDelete
     * @summary Deletes document (only for authorized users)
     * @request DELETE:/api/DocumentApi/Delete/{Id}
     */
    documentApiDelete: (id: string, query?: { id?: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/DocumentApi/Delete/${id}`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name UserApiRegisterApplicant
     * @summary Applicant Registration (only for authorized users)
     * @request POST:/api/UserApi/RegisterApplicant
     */
    userApiRegisterApplicant: (
      model: PortalModuleAuthApiModelsRegisterApplicantRequestModel,
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleAuthApiModelsRegisterApplicantResponseModel, void>({
        path: `/api/UserApi/RegisterApplicant`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiDocumentTypesCollection
     * @summary Gets documents type (only for authorized users)
     * @request GET:/api/VerificationApi/DocumentTypesCollection
     */
    verificationApiDocumentTypesCollection: (
      query?: {
        'model.gradeName'?: string
        'model.documentSetElementName'?: string
        'model.documentSetTypeName'?: string
        'model.domainName'?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], void>({
        path: `/api/VerificationApi/DocumentTypesCollection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserGrades
     * @summary Get user grades (only for authorized users)
     * @request GET:/api/VerificationApi/UserGrades
     * @deprecated
     */
    verificationApiUserGrades: (params: RequestParams = {}) =>
      this.request<PortalModuleVerificationModelsApiUserGradesModel, void>({
        path: `/api/VerificationApi/UserGrades`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description The method returns all grades that currently exist in the system and the chain of verifications steps that the user must pass in order to acquire each grade. To pass a verification step, the user must pass one of the verification forms associated with this step. The response also includes user's current grade and each form's status, by which the caller can define user's current verification state.
     *
     * @tags Verification
     * @name VerificationApiConfiguration
     * @summary Verification chain configuration (only for authorized users)
     * @request GET:/api/VerificationApi/Configuration
     */
    verificationApiConfiguration: (
      query?: { countryCode?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleVerificationModelsApiVerificationConfigurationModel, void>({
        path: `/api/VerificationApi/Configuration`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserTypes
     * @summary Get user types list
     * @request GET:/api/VerificationApi/UserTypes
     */
    verificationApiUserTypes: (
      query?: { isEditable?: boolean; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalModuleVerificationModelsApiUserTypeModel[], void>({
        path: `/api/VerificationApi/UserTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Verification
     * @name VerificationApiUserType
     * @summary Update user type (only for authorized users)
     * @request POST:/api/VerificationApi/UserType
     */
    verificationApiUserType: (
      model: PortalModuleVerificationModelsApiUserTypeUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<boolean, void>({
        path: `/api/VerificationApi/UserType`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Visibility
     * @name DisplayConfigurationApiGet
     * @summary Display configuration collection (only for authorized users)
     * @request GET:/api/DisplayConfigurationApi/Get
     */
    displayConfigurationApiGet: (
      query?: {
        domainName?: string
        paymentTypeCode?: string
        merchantCode?: string
        instanceName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationModel[],
        void
      >({
        path: `/api/DisplayConfigurationApi/Get`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Visibility
     * @name DisplayConfigurationApiCreate
     * @summary Create display configuration (only for authorized users)
     * @request POST:/api/DisplayConfigurationApi/Create
     */
    displayConfigurationApiCreate: (
      model: FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationModel,
        void
      >({
        path: `/api/DisplayConfigurationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Visibility
     * @name DisplayConfigurationApiUpdate
     * @summary Update display configuration (only for authorized users)
     * @request PUT:/api/DisplayConfigurationApi/Update
     */
    displayConfigurationApiUpdate: (
      model: FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationModel,
        void
      >({
        path: `/api/DisplayConfigurationApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Only for ADMINISTRATOR and FINANCE_MANAGER roles
     *
     * @tags Visibility
     * @name DisplayConfigurationApiDelete
     * @summary Delete specified display configuration (only for authorized users)
     * @request DELETE:/api/DisplayConfigurationApi/Delete
     */
    displayConfigurationApiDelete: (
      model: FinanceConfigurationModelsApiDisplayConfigurationDisplayConfigurationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/DisplayConfigurationApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags W1
     * @name W1ApiAdd
     * @summary Add funds via WalletOne (only for authorized users)
     * @request POST:/api/W1Api/Add
     */
    w1ApiAdd: (model: PortalPsWalletoneModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWalletoneModelsApiDepositModel, void>({
        path: `/api/W1Api/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags W1
     * @name W1ApiNotice
     * @summary Notice about adding funds via WalletOne (only for authorized users)
     * @request POST:/api/W1Api/Notice
     */
    w1ApiNotice: (model: PortalPsWalletoneModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/W1Api/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationFinanceOperationApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/WebhookConfigurationFinanceOperationApi/Collection
     */
    webhookConfigurationFinanceOperationApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationModel[],
        any
      >({
        path: `/api/WebhookConfigurationFinanceOperationApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationFinanceOperationApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/WebhookConfigurationFinanceOperationApi/Create
     */
    webhookConfigurationFinanceOperationApiCreate: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationModel,
        any
      >({
        path: `/api/WebhookConfigurationFinanceOperationApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationFinanceOperationApiUpdate
     * @summary  (only for authorized users)
     * @request PUT:/api/WebhookConfigurationFinanceOperationApi/Update
     */
    webhookConfigurationFinanceOperationApiUpdate: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationModel,
        any
      >({
        path: `/api/WebhookConfigurationFinanceOperationApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationFinanceOperationApiDelete
     * @summary  (only for authorized users)
     * @request DELETE:/api/WebhookConfigurationFinanceOperationApi/Delete
     */
    webhookConfigurationFinanceOperationApiDelete: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationFinanceOperationWebhookConfigurationFinanceOperationDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/WebhookConfigurationFinanceOperationApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationLoginApiCollection
     * @summary  (only for authorized users)
     * @request GET:/api/WebhookConfigurationLoginApi/Collection
     */
    webhookConfigurationLoginApiCollection: (
      query?: { domainName?: string; instanceName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginModel[],
        any
      >({
        path: `/api/WebhookConfigurationLoginApi/Collection`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationLoginApiCreate
     * @summary  (only for authorized users)
     * @request POST:/api/WebhookConfigurationLoginApi/Create
     */
    webhookConfigurationLoginApiCreate: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginModel,
        any
      >({
        path: `/api/WebhookConfigurationLoginApi/Create`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationLoginApiUpdate
     * @summary  (only for authorized users)
     * @request PUT:/api/WebhookConfigurationLoginApi/Update
     */
    webhookConfigurationLoginApiUpdate: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginUpdateModel,
      params: RequestParams = {},
    ) =>
      this.request<
        PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginModel,
        any
      >({
        path: `/api/WebhookConfigurationLoginApi/Update`,
        method: 'PUT',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebhookConfiguration
     * @name WebhookConfigurationLoginApiDelete
     * @summary  (only for authorized users)
     * @request DELETE:/api/WebhookConfigurationLoginApi/Delete
     */
    webhookConfigurationLoginApiDelete: (
      model: PortalExtensionsWebhookModelsApiWebhookConfigurationLoginWebhookConfigurationLoginDeleteModel,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/WebhookConfigurationLoginApi/Delete`,
        method: 'DELETE',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiAdd
     * @summary Add funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Add
     */
    webmoneyApiAdd: (model: PortalPsWebmoneyModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWebmoneyModelsApiDepositModel, void>({
        path: `/api/WebmoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiNotice
     * @summary Notice about adding funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Notice
     */
    webmoneyApiNotice: (model: PortalPsWebmoneyModelsApiNoticeModel, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/WebmoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webmoney
     * @name WebmoneyApiWithdraw
     * @summary Withdraw funds via Webmoney (only for authorized users)
     * @request POST:/api/WebmoneyApi/Withdraw
     */
    webmoneyApiWithdraw: (
      model: PortalPsWebmoneyModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/WebmoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webpay
     * @name WebpayApiAdd
     * @summary Add funds via Webpay (only for authorized users)
     * @request POST:/api/WebpayApi/Add
     */
    webpayApiAdd: (model: PortalPsWebpayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWebpayModelsApiDepositModel, void>({
        path: `/api/WebpayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Webpay
     * @name WebpayApiWithdraw
     * @summary Withdraw funds via Webpay (only for authorized users)
     * @request POST:/api/WebpayApi/Withdraw
     */
    webpayApiWithdraw: (model: PortalPsWebpayModelsApiWithdrawModel, params: RequestParams = {}) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/WebpayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiAdd
     * @summary Add funds via Wire Transfer (only for authorized users)
     * @request POST:/api/WireTransferApi/Add
     */
    wireTransferApiAdd: (model: PortalPsWireModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsWireModelsApiDepositModel, void>({
        path: `/api/WireTransferApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankDetails
     * @summary Bank details (only for authorized users)
     * @request GET:/api/WireTransferApi/BankDetails
     */
    wireTransferApiBankDetails: (
      query?: {
        domainName?: string
        paymentOptionCode?: string
        bankCountryCode?: string
        bankId?: string
        currencyCode?: string
        russianName?: string
        address?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBankDetailsModel, void>({
        path: `/api/WireTransferApi/BankDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiSelectBank
     * @summary Select bank (only for authorized users)
     * @request GET:/api/WireTransferApi/SelectBank
     */
    wireTransferApiSelectBank: (
      query?: {
        bankCountryCode?: string
        currencyCode?: string
        paymentTypeAccountValue?: string
        beneficiaryAccountNumber?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBankModel, void>({
        path: `/api/WireTransferApi/SelectBank`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiTransferDetails
     * @summary Transfer details (only for authorized users)
     * @request GET:/api/WireTransferApi/TransferDetails
     */
    wireTransferApiTransferDetails: (
      query?: { bankCode?: string; beneficiaryAccountNumber?: string; nfsType?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiTransferDetailsModel, void>({
        path: `/api/WireTransferApi/TransferDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiAdditionalDetails
     * @summary Additional details (only for authorized users)
     * @request GET:/api/WireTransferApi/AdditionalDetails
     */
    wireTransferApiAdditionalDetails: (
      query?: {
        bankCountryCode?: string
        currencyCode?: string
        accountNumber?: string
        paymentTypeAccountValue?: string
        bankId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiAdditionalDetailsModel, void>({
        path: `/api/WireTransferApi/AdditionalDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiWithdraw
     * @summary Withdraw funds via Wire Transfer (only for authorized users)
     * @request POST:/api/WireTransferApi/Withdraw
     */
    wireTransferApiWithdraw: (
      model: PortalPsWireModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/WireTransferApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankCurrencies
     * @summary Get bank currencies list
     * @request GET:/api/WireTransferApi/BankCurrencies
     */
    wireTransferApiBankCurrencies: (
      query?: {
        balanceOperationTypeName?: string
        countryCode?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/WireTransferApi/BankCurrencies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBankCountries
     * @summary Get bank countries list
     * @request GET:/api/WireTransferApi/BankCountries
     */
    wireTransferApiBankCountries: (
      query?: {
        balanceOperationTypeName?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<
        SystemCollectionsGenericKeyValuePair2SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089SystemStringMscorlibVersion4000CultureNeutralPublicKeyTokenB77A5C561934E089[],
        void
      >({
        path: `/api/WireTransferApi/BankCountries`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiNfsOptions
     * @summary Get NFS options list (only for authorized users)
     * @request GET:/api/WireTransferApi/NfsOptions
     */
    wireTransferApiNfsOptions: (
      query?: { countryCode?: string; currencyCode?: string },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiNfsOptionModel[], void>({
        path: `/api/WireTransferApi/NfsOptions`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiBanks
     * @summary Get banks list
     * @request GET:/api/WireTransferApi/Banks
     */
    wireTransferApiBanks: (
      query?: {
        balanceOperationTypeName?: string
        countryCode?: string
        currencyCode?: string
        gatewayPublicKey?: string
        userId?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiBanksResponseModel, void>({
        path: `/api/WireTransferApi/Banks`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiCountryByAccountNumber
     * @summary Get country by account number (only for authorized users)
     * @request GET:/api/WireTransferApi/CountryByAccountNumber
     */
    wireTransferApiCountryByAccountNumber: (
      query?: {
        balanceOperationTypeName?: string
        paymentTypeAccountValue?: string
        value?: string
        paymentType?: string
        paymentOption?: string
        paymentRoute?: string
        merchant?: string
        domainName?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<PortalPsWireModelsApiCountryModel, void>({
        path: `/api/WireTransferApi/CountryByAccountNumber`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiInvoices
     * @summary Get invoices list (only for authorized users)
     * @request GET:/api/WireTransferApi/Invoices
     */
    wireTransferApiInvoices: (params: RequestParams = {}) =>
      this.request<PortalPsWireModelsApiInvoiceHeaderModel[], void>({
        path: `/api/WireTransferApi/Invoices`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiDeleteInvoice
     * @summary Delete invoice (only for authorized users)
     * @request DELETE:/api/WireTransferApi/DeleteInvoice
     */
    wireTransferApiDeleteInvoice: (query: { wireId: string }, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/api/WireTransferApi/DeleteInvoice`,
        method: 'DELETE',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WireTransfer
     * @name WireTransferApiInvoice
     * @summary Get invoice (only for authorized users)
     * @request GET:/api/WireTransferApi/Invoice
     */
    wireTransferApiInvoice: (
      query?: { wireId?: string; domainName?: string },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/WireTransferApi/Invoice`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiAdd
     * @summary Add funds via YandexMoney (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Add
     */
    yandexMoneyApiAdd: (model: PortalPsYandexmoneyModelApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsYandexmoneyModelApiDepositModel, void>({
        path: `/api/YandexMoneyApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiNotice
     * @summary Notice about adding funds via YandexMoney (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Notice
     */
    yandexMoneyApiNotice: (
      model: PortalPsYandexmoneyModelApiNoticeModel,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/api/YandexMoneyApi/Notice`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags YandexMoney
     * @name YandexMoneyApiWithdraw
     * @summary Withdraw funds via YandexMoney (only for authorized users)
     * @request POST:/api/YandexMoneyApi/Withdraw
     */
    yandexMoneyApiWithdraw: (
      model: PortalPsYandexmoneyModelApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/YandexMoneyApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ZotaPay
     * @name ZotaPayApiAdd
     * @summary Add funds via ZotaPay (only for authorized users)
     * @request POST:/api/ZotaPayApi/Add
     */
    zotaPayApiAdd: (model: PortalPsZotapayModelsApiAddModel, params: RequestParams = {}) =>
      this.request<PortalPsZotapayModelsApiDepositModel, void>({
        path: `/api/ZotaPayApi/Add`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ZotaPay
     * @name ZotaPayApiWithdraw
     * @summary Withdraw funds via ZotaPay (only for authorized users)
     * @request POST:/api/ZotaPayApi/Withdraw
     */
    zotaPayApiWithdraw: (
      model: PortalPsZotapayModelsApiWithdrawModel,
      params: RequestParams = {},
    ) =>
      this.request<FinanceTransferModelsApiFinanceOperationModelBase, void>({
        path: `/api/ZotaPayApi/Withdraw`,
        method: 'POST',
        body: model,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description The method allows user to receive authorization tokens using appropriate grant_type <br/> https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.3 <br/> https://datatracker.ietf.org/doc/html/rfc6749#section-6
     *
     * @tags Auth
     * @name OauthApiTokenCreate
     * @summary Get authorization token
     * @request POST:/api/OauthApi/Token
     */
    oauthApiTokenCreate: (
      data: { grant_type: string; refresh_token?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          access_token: string
          token_type: string
          expires_in?: number
          '.issued'?: string
          '.expires'?: string
          refresh_token?: string
          refresh_token_issued?: string
          refresh_token_expires?: string
          refresh_token_expires_in?: number
        },
        void
      >({
        path: `/api/OauthApi/Token`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  }
  account = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountApiGetUserInfo
     * @summary User Information (only for authorized users)
     * @request GET:/Account/UserInfo
     */
    accountApiGetUserInfo: (params: RequestParams = {}) =>
      this.request<OauthCoreModelsUserInfoUserInfoViewModel, void>({
        path: `/Account/UserInfo`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
}
