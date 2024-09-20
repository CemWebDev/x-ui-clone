import Button from "../../UI/Button";

const Subscribe = () => {
  return (
    <div className="bg-black border border-neutral-800/90 rounded-2xl p-4 w-full">
      <h1 className="text-xl font-semibold">Subscribe to Premium</h1>
      <p className="text-sm my-2">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <Button>Subscribe</Button>
    </div>
  );
};

export default Subscribe;
