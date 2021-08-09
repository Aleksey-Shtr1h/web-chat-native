import styled from "styled-components/native";

// Container Row and Column

const Ant_FlexWrap = styled.View`
  display: flex;
  align-items: ${(props) => props.ai || "stretch"};
  justify-content: ${(props) => props.jc || "flex-start"};
  align-content: ${(props) => props.ac || "stretch"};
  align-self: ${(props) => props.asf || "auto"};

  padding: ${(props) => props.p || "0 0 0 0"};
  margin: ${(props) => props.m || "0 0 0 0"};

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};

  border-radius: ${(props) => props.brs || "0px"};

  background: ${(props) => props.bg || "#ffffff00"};

  border: ${(props) => props.brd || "1px solid #ffffff00"};
`;

export const Ant_FlexScrolWrap = styled.ScrollView`
  padding: ${(props) => props.p || "0 0 0 0"};
  margin: ${(props) => props.m || "0 0 0 0"};

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};

  border-radius: ${(props) => props.brs || "0px"};

  background: ${(props) => props.bg || "#ffffff00"};

  border: ${(props) => props.brd || "1px solid #ffffff00"};
`;
const Ant_FlexWrapPress = styled.TouchableOpacity`
  display: flex;
  align-items: ${(props) => props.ai || "stretch"};
  justify-content: ${(props) => props.jc || "flex-start"};
  align-content: ${(props) => props.ac || "stretch"};
  align-self: ${(props) => props.asf || "auto"};

  padding: ${(props) => props.p || "0 0 0 0"};
  margin: ${(props) => props.m || "0 0 0 0"};

  width: ${(props) => props.w || "auto"};
  height: ${(props) => props.h || "auto"};

  border-radius: ${(props) => props.brs || "0px"};

  background: ${(props) => props.bg || "#ffffff00"};

  border: ${(props) => props.bdr || "1px solid #ffffff00"};
`;

export const Ant_FlexColumnWrap = styled(Ant_FlexWrap)`
  flex-direction: column;
`;

export const Ant_FlexRowWrap = styled(Ant_FlexWrap)`
  flex-direction: row;
`;

export const Ant_FlexRowWrapPress = styled(Ant_FlexWrapPress)`
  flex-direction: row;
`;

export const Ant_FlexColumnWrapPress = styled(Ant_FlexWrapPress)`
  flex-direction: column;
`;

// Image Icon

export const Ant_IconImage = styled.Image`
  width: ${(props) => props.w || "50"}px;
  height: ${(props) => props.h || "50"}px;
  border-radius: ${(props) => props.br || "50px"};
`;

//Switch Line

export const Ant_SwitchLineWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.ai || "stretch"};
  justify-content: ${(props) => props.jc || "flex-start"};
  align-content: ${(props) => props.ac || "stretch"};
  align-self: ${(props) => props.asf || "auto"};

  width: 100%;
`;

export const Ant_SwitchLine = styled.View`
  width: 100%;

  height: 1px;

  background: ${(props) => (props.bgc ? "#ffffff00" : "black")};
`;

export const Ant_SwitchLineIcon = styled.Image`
  width: 20px;
  height: 20px;

  transform: ${(props) =>
    props.toggleBtn ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const Ant_SwitchLineText = styled.Text`
  font-size: 20px;
  font-weight: 800;

  color: ${(props) => (props.color ? "grey" : "#03a9f4 ")};
`;

export const Ant_SwitchListWrap = styled.View`
  padding: 1% 2% 1%;
  border: 2px solid #03a9f4;
  border-radius: 5px;
`;
