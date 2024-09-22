import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import { setColor, setBackgroundColor } from "../store/appearance/actions";
import ThemeButton from "../components/UI/ThemeButton";
import { themes } from "../themes";
import { colors } from "../constant";
import { IoMdCheckmark } from "react-icons/io";

const Appearance = () => {
  const { backgroundColor, color } = useAppearance();

  return (
    <section>
      <div className="pt-2 pl-4">
        <h1 className="flex items-center gap-10 text-xl text-[color:var(--text-color)]">
          <NavLink
            className="w-8 h-8 relative flex items-center justify-center hover-effect rounded-full group"
            to="/settings/display"
          >
            <IoArrowBack />
            <div className="text-xs bg-[color:var(--background-secondary)] text-[color:var(--text-color)] p-1 rounded-md absolute top-full mt-1 opacity-0 visibility-hidden transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
              Back
            </div>
          </NavLink>
          <span>Display</span>
        </h1>
        <p className="text-xs mt-5 text-[color:var(--text-color-secondary)]">
          Manage your font size, color, and background. These settings affect
          all the X accounts on this browser.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="border-y">
          <div className="p-3">
            <h1 className="text-lg font-semibold text-[color:var(--text-color)]">
              Font size
            </h1>
          </div>
        </h1>
      </div>
      <div>
        <div className="p-3 border-b">
          <h1 className="text-lg text-[color:var(--text-color)] font-semibold">
            Colors
          </h1>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6 place-items-center">
            {colors.map((buttonBackgroundColor, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:ring-2 hover:ring-neutral-600 transition-all"
              >
                <button
                  style={{ "--bg": buttonBackgroundColor }}
                  className="w-10 h-10 rounded-full bg-[color:var(--bg)] flex items-center justify-center text-white text-xl"
                  onClick={() => {
                    setColor({
                      ...color,
                      primary: buttonBackgroundColor,
                    });
                  }}
                >
                  {color.primary === buttonBackgroundColor && <IoMdCheckmark />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="p-3">
          <h1 className="text-lg text-[color:var(--text-color)] font-semibold">
            Background
          </h1>
          <div className="grid sm:grid-cols-3 gap-2 mt-3 text-sm">
            {themes.map((theme) => (
              <ThemeButton
                key={theme.name}
                label={theme.label}
                color={theme}
                backgroundColor={theme}
                active={backgroundColor.name === theme.name}
                onClick={() => {
                  const newColor = {
                    ...color,
                    textColor: theme.textColor,
                    textColorSecondary: theme.textColorSecondary,
                  };
                  const newBackgroundColor = {
                    name: theme.name,
                    primary: theme.backgroundPrimary,
                    secondary: theme.backgroundSecondary,
                    third: "#273340",
                  };
                  setColor(newColor);
                  setBackgroundColor(newBackgroundColor);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appearance;
