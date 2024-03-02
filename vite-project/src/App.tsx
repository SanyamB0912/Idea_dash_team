import React, { useState } from 'react';
  import './App.css'; 

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  details: string;
}

const coreTeamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'Software Engineer',
    imageUrl: 'vite-project\src\download.jpeg',
    details: 'John Doe is a software engineer with expertise in React and Node.js.',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer',
    imageUrl: './download.jpeg',
    details: 'John Doe is a software engineer with expertise in React and Node.js.',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer',
    imageUrl: './download.jpeg',
    details: 'John Doe is a software engineer with expertise in React and Node.js.',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer',
    imageUrl: './download.jpeg',
    details: 'John Doe is a software engineer with expertise in React and Node.js.',
  },
  {
    name: 'John Doe',
    position: 'Software Engineer',
    imageUrl: './download.jpeg',
    details: 'John Doe is a software engineer with expertise in React and Node.js.',
  },
  // Add more core team members here...
];

const ideationTeamMembers: TeamMember[] = [
  {
    name: 'Jane Smith',
    position: 'Product Manager',
    imageUrl: '',
    details: 'Jane Smith is a product manager with a passion for innovation and creativity.',
  },
  // Add more ideation team members here...
];

const prTeamMembers: TeamMember[] = [
  {
    name: 'Alex Johnson',
    position: 'Public Relations Manager',
    imageUrl: 'alex.jpg',
    details: 'Alex Johnson is a public relations manager with excellent communication skills.',
  },
  // Add more PR team members here...
];

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([]);
  const [selectedMemberDetails, setSelectedMemberDetails] = useState<TeamMember | null>(null);

  const handleTeamClick = (teamMembers: TeamMember[]) => {
    setSelectedTeam(teamMembers);
    setSelectedMemberDetails(null); // Reset selected member details
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMemberDetails(member);
  };

  const closeDetailsPopup = () => {
    setSelectedMemberDetails(null);
  };

  return (
    <div className="container">
      <fieldset className="navbarfs">
      <div className="navbar">
        <button onClick={() => handleTeamClick(coreTeamMembers)}>Core Team</button>
        <button onClick={() => handleTeamClick(ideationTeamMembers)}>Ideation Team</button>
        <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button>
        <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button>
        {/* <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button>
        <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button>
        <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button>
        <button onClick={() => handleTeamClick(prTeamMembers)}>PR Team</button> */}

      </div>
      <div className="team-members">
        {selectedTeam.map((member, index) => (
          <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
            <img src={member.imageUrl} alt={member.name} />
          </div>
        ))}
      </div>
      {selectedMemberDetails && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closeDetailsPopup}>Close</button>
            <h2>{selectedMemberDetails.name}</h2>
            <p>{selectedMemberDetails.position}</p>
            <p>{selectedMemberDetails.details}</p>
          </div>
        </div>
      )}</fieldset>
    </div>
  );
};

export default App;