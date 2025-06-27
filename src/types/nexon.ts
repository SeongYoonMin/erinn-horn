/**
 * @name MabinogiServerName
 * @description 마비노기 서버 이름
 */
export type MabinogiServerName = "류트" | "만돌린" | "하프" | "울프";

/**
 * @name INexonHornBugleWorldHistory
 * @description 마비노기 거대한 외침의 뿔피리 월드 기록
 * @types {string} character_name 캐릭터 이름
 * @types {string} message 메시지
 * @types {string} date_send 메시지 전송 시간
 */
export interface INexonHornBugleWorldHistory {
  character_name: string;
  message: string;
  date_send: string;
}

/**
 * @name INexonHornBugleError
 * @description 마비노기 거대한 외침의 뿔피리 월드 기록 에러
 * @types {string} name 에러 이름
 * @types {string} message 에러 메시지
 */
export interface INexonHornBugleError {
  name: string;
  message: string;
}