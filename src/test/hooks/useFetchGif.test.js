import {renderHook} from "@testing-library/react-hooks";
import {useFetchGif} from "../../hooks/useFetchGif";

describe('Test custom Hook useFetchGif', () => {

  test('Test custom hooks with initial value', async () =>
  {
      const initialCategory = 'Goku';
      const {result, waitForNextUpdate} = renderHook(()=>useFetchGif(initialCategory));
      const {loading,data} = result.current;
      await waitForNextUpdate();
      expect(loading).toBeTruthy();
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBe(0);
  });

  test('Test custom hooks wait for fetch result', async () =>
  {
      const initialCategory = 'Goku';
      const {result, waitForNextUpdate} = renderHook(()=>useFetchGif(initialCategory));
      await waitForNextUpdate();
      const {loading,data} = result.current;
      expect(loading).toBeFalsy();
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(0);
  });

});