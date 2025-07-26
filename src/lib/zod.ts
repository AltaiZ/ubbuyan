import { z } from "zod";

export const phoneZod = z
  .string()
  .regex(/^\d{8}$/, "Буруу утасны дугаар")
  .min(1, { message: "Утасны дугаар шаардлагатай" });

export const passwordZod = z
  .string()
  .min(1, { message: "Та нууц үгээ оруулна уу." })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    "Нууц үг хамгийн багадаа 8 тэмдэгт байх ба түүнд тухайн жижиг үсэг болон том үсэг, тэмдэгт байх шаардлагатай."
  );
export const mailZod = z
  .string()
  .min(1, { message: "Та өөрийн имэйлээ оруулна уу." })
  .regex(
    /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/,
    "Буруу имэйл"
  );
