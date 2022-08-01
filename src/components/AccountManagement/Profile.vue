<template>
  <UpdateProfileModal
    :visible="showUpdateModal"
    :cancel="handleCancelModal"
    :itemUpd="ProfileReducer.data"
    :accountEmail="accountEmail"
  />
  <el-form style="padding: 0.5em" label-position="left" label-width="115px">
    <h3>{{ accountEmail == "" ? "Choose a account" : accountEmail }}</h3>
    <el-form-item class="flex_none" style="margin-left: 0"> </el-form-item>
    <el-row>
      <el-col :span="12" style="padding-right: 0.25em; border-right: 1px solid black;">
        <el-form-item label="Full Name:" class="content_profile" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.fullName }}
          </div>
        </el-form-item>
        <el-form-item label="Date of birth:" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.birthday }}
          </div>
        </el-form-item>
        <el-form-item label="Gender:" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.gender }}
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="12" style="padding-left: 0.25em;">
        <el-form-item label="Referral Code:" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.referralCode }}
          </div>
        </el-form-item>
        <el-form-item label="PresenterCode:" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.presenterCode }}
          </div>
        </el-form-item>
        <el-form-item label="Phone:" style="font-weight: 600;">
          <div>
            {{ ProfileReducer.data.phone }}
          </div>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="Address:" style="font-weight: 600;">
      <div>
        {{ ProfileReducer.data.address }}
      </div>
    </el-form-item>
    <el-form-item>
      <button-common
        :disabled="disabled"
        type="warning"
        :title="Text.EditBtn"
        icon="Edit"
        @click="handleEdit()"
      />
      <button-common
        type="danger"
        :disabled="disabled"
        :title="Text.DeleteBtn"
        icon="Delete"
        @click="handleDelete()"
      />
    </el-form-item>
  </el-form>
</template>
<script>
import { ref, watchEffect } from "vue";
import { ProfileStore } from "../../reducers/AccManageReducer";
import { Text } from "../../constants/commonConstants";
import { ButtonCommon } from "../common";
import { DeleteModal, UpdateProfileModal } from "./Modal";
export default {
  components: {
    ButtonCommon,
    UpdateProfileModal,
  },
  props: {
    accountEmail: {
      type: String,
      default: "",
    },
    idAccount: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const ProfileReducer = ProfileStore();
    const noDataLabel = ref(true);
    const showUpdateModal = ref(false);
    const disabled = ref(true);

    const handleDelete = () => {
      DeleteModal({
        message: "Do you want to delete this account?",
        id: props.idAccount,
        key: "Account",
      });
    };
    const handleCancelModal = () => {
      showUpdateModal.value = false;
    };
    const handleEdit = () => {
      showUpdateModal.value = true;
    };
    watchEffect(() => {
      if (props.idAccount) {
        disabled.value = false;
      }
    });
    return {
      Text,
      handleDelete,
      noDataLabel,
      ProfileReducer,
      showUpdateModal,
      handleEdit,
      handleCancelModal,
      disabled,
    };
  },
};
</script>
<style>
@import "../../styles/AccountManageStyle.css";
</style>
