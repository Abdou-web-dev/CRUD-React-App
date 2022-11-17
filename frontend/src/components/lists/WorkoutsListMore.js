import { Button, List, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { WorkoutDetailsItemCondensed } from "../sections/WorkoutDetailsItemCondensed";
let count = 3;
export function WorkoutsListMore({ workouts }) {
  const slicedArray1 = workouts.slice(0, 10);
  const slicedArray2 = workouts.slice(10, 20);
  const slicedArray3 = workouts.slice(20, 30);
  console.log(slicedArray1);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setData(slicedArray1);
    setList(slicedArray1);
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          //   name: {},
          //   picture: {},
        }))
      )
    );

    const newData = data.concat(slicedArray2);
    setData(newData);
    setList(newData);
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  };
  const loadMore = !loading ? (
    <div
      style={{
        textAlign: "center",
        marginTop: 12,
        height: 32,
        lineHeight: "32px",
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null;
  const WorkoutElem1 =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index === 0 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
            }}
            key={index}
          ></WorkoutDetailsItemCondensed>
        )
    );
  return (
    <List
      className="demo-loadmore-list"
      //   loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      // grid={{ gutter: 16, column: 8 }}
      renderItem={(item) => (
        <List.Item className="demo-loadmore-list-item">
          {WorkoutElem1}
          <Skeleton avatar loading={item.loading} active>
            <List.Item.Meta
              avatar={"aa"}
              title={"bb"}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
}
