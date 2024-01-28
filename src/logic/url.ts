const BASE_URL = process.env.BASE_URL || "http://base.co.jp";
const PROJECT_NAME = process.env.PROJECT_NAME || "開発プロジェクト";
const SYSTEM_NAME = process.env.SYSTEM_NAME || "システムA";
const TEST_NAME = process.env.ENV_TYPE || "test用";

const ID_PARAM = "ID";
const NAME_PARAM = "NAME";
const URL_PARAM = "INPUT_ISSUE_SET_URL";
const USER_NAME_PARAM = "INPUT_ISSUE_USER_NAME";
const PW_PARAM = "INPUT_ISSUE_PW";

interface InputForm {
  url: string;
  user_id: string;
  password: string;
}

export const generateURL = (
  office_id: string,
  main_name_top: string,
  input_form: InputForm
): string => {
  const queryParams = new URLSearchParams({
    [ID_PARAM]: office_id,
    [NAME_PARAM]: main_name_top,
    [URL_PARAM]: input_form.url,
    [USER_NAME_PARAM]: input_form.user_id,
    [PW_PARAM]: input_form.password,
  });

  const url = `${BASE_URL}/connect/${PROJECT_NAME}/connect/${SYSTEM_NAME}/connect/${TEST_NAME}?${queryParams.toString()}`;

  return url;
};
