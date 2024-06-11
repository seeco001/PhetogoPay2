package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the WalletTransaction type in your schema. */
public final class WalletTransactionPath extends ModelPath<WalletTransaction> {
  private UserProfilePath activeProfile;
  WalletTransactionPath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, WalletTransaction.class);
  }
  
  public synchronized UserProfilePath getActiveProfile() {
    if (activeProfile == null) {
      activeProfile = new UserProfilePath("activeProfile", false, this);
    }
    return activeProfile;
  }
}
