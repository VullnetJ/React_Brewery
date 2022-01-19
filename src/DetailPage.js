import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const DetailPage = (props) => {
  const { id } = useParams();

  let navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/HomePage");
  };

  return (
    <div className="detail-page">
      <h1>Showing detail about each brewery. </h1>
      <br />
      <div className="brewery-list">
        <h2>{id}</h2>
      </div>
      <div className="detail-button-go-back">
        <Stack direction="row" spacing={2}>
          <Button
            onClick={goToHomePage}
            variant="outlined"
            size="large"
            color="primary"
          >
            Go Back
          </Button>
        </Stack>
      </div>
      <br />
    </div>
  );
};
export default DetailPage;
