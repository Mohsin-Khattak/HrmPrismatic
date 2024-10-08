export const IP = 'https://luggage.prismatic-technologies.com';
// export const IP = 'https://getmovers.co.uk';
// export const IP = 'https://getmovers.katashempstead.com';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    signup: 'user',
    login: 'login',
    create_user: 'user/create',
    get_user_info: 'user/userInfo',
    update_password: 'UpdatePassword',
    edit_password: 'UpdateUserPassword',
    verify_otp: 'otpVerify',
    forgot_password: 'sendOtp',
    uploadImage: 'updateImage',
    get_home_data: 'getService',
    get_home_banner: 'bannerList',
    post_location: 'postData',
    update_profile: 'user/2',
    get_privacy: 'getUserPrivacy',
    get_term: 'getUserTerms',
    get_contactUs: 'contactUsInfo',
    get_tracking: 'driverOrderLocation',
    delete_account: 'deleteAccount',
  },
  app: {
    post_fillstore: 'fillStore/',
    get_orderlist: 'OrderList',
    get_order_details: 'OrderDetails',
    driver_review: 'driverReview',
    place_hour_order: 'placeOrder',
  },
  chat: {
    get_chat_messages: 'chat/messages/',
    get_latest_message: 'chat/get-new-messages/',
    get_conservation: 'chat/conversations',
    send_message: 'chat/insert-message',
    create_conservation: 'chat/create-conversation',
  },
  notification: {
    get_notification: 'customerNotification',
    read_notification: 'notificationRead',
  },
};
