import Header from "../components/notifications/Header";
import Mention from "../components/notifications/Mention";
import Verified from "../components/notifications/Verified";

const Notifications = () => {
  return (
    <section className="-mt-2">
      <Header />
      <Verified />
      <Mention />
    </section>
  );
};

export default Notifications;
