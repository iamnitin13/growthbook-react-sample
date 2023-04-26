import { useFeatureIsOn, IfFeatureEnabled } from "@growthbook/growthbook-react";

const SampleComponent = () => {
  const enabled = useFeatureIsOn("my-feature");

  return (
    <div className="app">
      {enabled ? <div>On!</div> : <div>Off!</div>}
      <IfFeatureEnabled
        feature="show-logo"
        default={{
          id: 123,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40nBjEoGLqD0dn5apEQxKEBon3gvR7l75UBCptu-PLA&usqp=CAU&ec=48665699",
          altName: "Twitter logo",
        }}
      >
        <img src={url} className="App-logo" alt="logo" />
      </IfFeatureEnabled>
    </div>
  );
};

export default SampleComponent;
