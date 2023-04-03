import { useEffect } from "react";

function PageTitle({ title }) {
  useEffect(() => {
    document.title = title;

    return () => {};
  }, [title]);

  return null;
}

export default PageTitle;
