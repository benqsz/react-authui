import {
  SocialButton,
  SocialButtonsGroup,
} from 'registry/auth/ui/social-buttons';

export default function SocialButtonsDemo() {
  return (
    <div className="space-y-8">
      <SocialButtonsGroup display="list" withSeparator>
        <SocialButton name="FaGoogle" />
        <SocialButton name="FaFacebook" />
      </SocialButtonsGroup>
      <SocialButtonsGroup display="grid">
        <SocialButton name="FaMicrosoft" />
        <SocialButton name="FaInstagram" />
      </SocialButtonsGroup>
    </div>
  );
}
