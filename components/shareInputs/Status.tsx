import { UseFormRegisterReturn, UseFormWatch } from "react-hook-form";
import { UserSubmitData } from "../../model/interface/userList";

interface Props {
  register: UseFormRegisterReturn;
  usavestatus?: any;
  label?: string;
  watch: UseFormWatch<UserSubmitData>;
}

const Status = ({ register, usavestatus, label }: Props) => {
  return (
    <div className="w-full">
      <span className="block mb-2 text-sm">{label}</span>
      <div className="flex items-center space-x-4">
        <select
          className="bg-transparent p-1 outline-none text-sm border-2 rounded-md text-pintalk-dark-brown w-[50%]"
          {...register}
        >
          <option value={usavestatus}>{usavestatus === "A" ? "활성" : "탈퇴"}</option>
          <option value="A" className={usavestatus === "A" ? "hidden" : ""}>
            활성
          </option>
          <option value="W" className={usavestatus === "W" ? "hidden" : ""}>
            탈퇴
          </option>
        </select>
      </div>
    </div>
  );
};
export default Status;
