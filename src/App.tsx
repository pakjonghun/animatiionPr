import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState<null | number>(null);

  const onClick = (n: number | null) => {
    setNumber(n);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-purple-500 ">
      <div className="grid grid-cols-3 gap-3 w-96 h-48 p-3">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            layoutId={item.toString()}
            className="bg-fuchsia-200 first:col-span-2 last:col-span-2"
            onClick={() => onClick(item)}
          />
        ))}
      </div>
      <AnimatePresence>
        {number && (
          <motion.div
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            onClick={() => onClick(null)}
            className="absolute flex justify-center items-center h-screen w-screen"
          >
            <motion.div
              layoutId={number.toString()}
              className="bg-fuchsia-200 h-16 w-16"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
