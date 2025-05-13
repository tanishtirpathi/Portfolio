import GitHubCalendar from "react-github-calendar";

const MyGithubCalendar = () => {
  return (
    <div>

      <GitHubCalendar
        username="tanishtirpathi"
        colorScheme="light"
        blockSize={12}
        blockMargin={3}
     theme={{
    light: ['#0a1f17', '#007c49', '#00a76d', '#00cc88', '#00ff99'],
  }}
      />
    </div>
  );
};

export default MyGithubCalendar;