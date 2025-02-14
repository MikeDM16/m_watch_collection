import { getIconWithTextCentered } from "@/app/services/common_functions";
import Container from "react-bootstrap/Container";
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PageTitleDivisionComponent from "../common/pageTitleDivisionComponent";

export default function ContactsComponent() {
  return (
    <div>
      <div id="Contacts">{PageTitleDivisionComponent({ title: "Contacts" })}</div>
      <Container className="centered-text">
        <div className="page-title">Where to find me</div>
        <div>
          <p>
            If you are interested in some piece, want more information or share a correction, please
            feel free to contact me. I would love yout feedback!
          </p>
          <p>Swing by for a cup of coffe or leave me a message.</p>
          <div>
            <b>{getIconWithTextCentered(IoIosPin, "Porto, Portugal")}</b>
            <b>{getIconWithTextCentered(MdEmail, "Email: miguel_miranda96@live.com.pt")}</b>
          </div>
        </div>
      </Container>
    </div>
  );
}
