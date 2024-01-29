import 'mathlive';
import { MathfieldElement } from 'mathlive';
import { useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
    }
  }
}

function App() {
  const [value, setValue] = useState<string>("");
  const ref = useRef<MathfieldElement | null>(null);

  // defined in browser, not defined in tests
  console.log('hasFocus', ref.current?.hasFocus)

  return (
    <>
      <math-field
        ref={ref}
        data-testid="test-id"
        onInput={e => {
          const target = e.target as MathfieldElement;
          return setValue(target.value);
        }}
      >
      </math-field>
      <p data-testid="result">Value: {value}</p>
    </>
  );
}

export default App;
