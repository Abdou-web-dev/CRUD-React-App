import { Skeleton } from "antd";

export function AntdSkeleton({}) {
  return (
    <div>
      {/* Skeleton for the title of the workout , reps and load , and the toggle collapse btn */}
      <Skeleton
        active={true}
        loading={true}
        avatar={true} // the toggle btn is considered as an avatar
        title={{ width: "190px" }}
        paragraph={{ rows: 3, width: [90, 140, 130] }}
      />
    </div>
  );
}
