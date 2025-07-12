import { JSX } from "react";

export type StaggeredTextProps = {
  text: string;
  className?: string;
  /**
   * The HTML tag to render as the container.
   * Defaults to 'h1'. Can be 'h2', 'p', 'div', etc.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Base delay in seconds before the animation of this component starts.
   * This allows staggering multiple `StaggeredText` components smoothly.
   * Defaults to 0 (start immediately).
   */
  delay?: number;
};

export default function StaggeredText({ text, className = "", as: Component = "h1", delay = 0 }: StaggeredTextProps) {
  return (
    <Component className={`${className}`}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          style={
            {
              "--i": i,
              "--delay-base": `${delay}s`,
            } as React.CSSProperties
          }
          className="motion-reduce:animate-fade animate-stagger inline-block opacity-0"
        >
          {word}&nbsp;
        </span>
      ))}
    </Component>
  );
}
