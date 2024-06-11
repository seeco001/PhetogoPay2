package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the WalletAccountInfo type in your schema. */
public final class WalletAccountInfoPath extends ModelPath<WalletAccountInfo> {
  private UserProfilePath userProfile;
  WalletAccountInfoPath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, WalletAccountInfo.class);
  }
  
  public synchronized UserProfilePath getUserProfile() {
    if (userProfile == null) {
      userProfile = new UserProfilePath("userProfile", false, this);
    }
    return userProfile;
  }
}
