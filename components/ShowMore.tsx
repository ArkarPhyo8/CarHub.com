"use client";
import { CustomButton } from ".";
import { ShowMoreProps } from "../types/index";
import { updateSearchParams } from "../utils/index";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  // console.log(pageNumber);

  const router = useRouter();
  // console.log(pageNumber);

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
