import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  // /?value=hello 일 경우
  // console.log(params.get("value")); // hello
  return <div>Home</div>;
};
export default Home;
