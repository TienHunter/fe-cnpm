const path = {
   HOME: "/",
   LOGIN: "/login",
   LOGOUT: "/logout",
   HOUSEHOLD: "/household",
   HOUSEHOLD_DETAIL: "/household/:householdID",
   RESIDENT: "/resident",
};
const localStore = {
   USERNAME: "username",
   TOKEN: "access_token",
};
const fieldHousehold = [
   "householdCode",
   "owner",
   "addressHouse",
   "precinct",
   "district",
   "city",
];
const colHousehold = [
   "#",
   "Mã hộ khẩu",
   "Chủ hộ",
   "Số nhà/ Xóm",
   "Xã/ Phường",
   "Quận/ Huyện",
   "Tỉnh/ Thành phố",
   "Chức năng",
];
export { path, localStore, fieldHousehold, colHousehold };
